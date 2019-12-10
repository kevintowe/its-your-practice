import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pose } from '@its-your-practice/types';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { SubSink } from 'subsink';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PosesService implements OnDestroy {
  /**
   * Private Class Properties
   */
  private subs = new SubSink();
  private POSES_DB_REF = this.afs.collection<Pose>('poses');
  private posesStore = new BehaviorSubject<Pose[]>(null);

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
