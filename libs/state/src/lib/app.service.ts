import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pose } from '@its-your-practice/types';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { SubSink } from 'subsink';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppService implements OnDestroy {
  /**
   * Private Class Properties
   */

  private subs = new SubSink();

  private POSES_DB_REF = this.afs.collection<Pose>('poses');

  private poseStore = new BehaviorSubject<Pose[]>(null);

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

  //
  // Sequences
  //

  //
  // Classes
  //

  constructor(private afs: AngularFirestore, private authService: AuthService) {

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  /**
   * Public Class Methods
   */

  initializeService() {
    this.subs.sink = this.authService.user$.pipe(
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

  async updatePose(pose: Pose) {
    console.log(pose.description);
    await this.POSES_DB_REF.doc(pose.id).update(pose);
  }

  //
  // Sequences
  //

  //
  // Classes
  //

  /**
   * Private Class Methods
   */
}
