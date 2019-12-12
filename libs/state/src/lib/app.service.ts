import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material';

import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { AuthService } from './auth/auth.service';
import { Pose, Sequence, SequenceStep } from '@its-your-practice/types';

@Injectable({ providedIn: 'root' })
export class AppService implements OnDestroy {
  /**
   * Private Class Properties
   */

  private subs = new SubSink();

  private POSES_DB_REF = this.afs.collection<Pose>('poses');
  private poseStore = new BehaviorSubject<Pose[]>(null);

  private SEQUENCES_DB_REF = this.afs.collection<Sequence>('sequences');
  private sequencesStore = new BehaviorSubject<Sequence[]>(null);

  /**
   * Public Class Properties
   */

  //
  // User
  //

  //
  // Poses
  //

  public poses$ = this.poseStore.asObservable();
  public sequences$ = this.sequencesStore.asObservable();

  //
  // Sequences
  //

  //
  // Classes
  //

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
    private matDialog: MatDialog
  ) { }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  /**
   * Public Class Methods
   */

  initializeService() {
    /**
     * We should clean this up and probably combine some of these streams.
     */
    this.subs.sink = this.authService.user$
      .pipe(
        switchMap(user => {
          if (user) {
            return this.POSES_DB_REF.valueChanges({ idField: 'id' });
          } else {
            return of(null);
          }
        })
      )
      .subscribe(poses => {
        if (poses) {
          this.poseStore.next(poses);
        } else {
          this.poseStore.next(null);
        }
      });

    this.subs.sink = this.authService.user$
      .pipe(
        switchMap(user => {
          if (user) {
            return this.SEQUENCES_DB_REF.valueChanges({ idField: 'id' });
          } else {
            return of(null);
          }
        })
      )
      .subscribe(sequences => {
        if (sequences) {
          this.sequencesStore.next(sequences);
        } else {
          this.sequencesStore.next(null);
        }
      });
  }

  //
  // User
  //

  async updateUserInfo() { }

  //
  // Poses
  //

  async createPose(pose: Pose) {
    await this.POSES_DB_REF.add(pose);
  }

  async persistPose(pose: Pose) {
    await this.POSES_DB_REF.doc(pose.id).update(pose);
  }

  //
  // Sequences
  //

  async createSequence(sequence: Sequence) {
    await this.SEQUENCES_DB_REF.add(sequence);
  }

  async persistSequence(sequence: Sequence) {
    await this.SEQUENCES_DB_REF.doc(sequence.id).update(sequence);
  }

  async updateSequenceSteps(sequenceId: string, steps: SequenceStep[]) {
    await this.SEQUENCES_DB_REF.doc<Sequence>(sequenceId).update({ steps })
  }

  getObservableSequence(id: string) {
    return this.SEQUENCES_DB_REF.doc<Sequence>(id).valueChanges();
  }

  //
  // Classes
  //

  /**
   * Private Class Methods
   */
}
