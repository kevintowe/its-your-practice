import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { first, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubSink } from 'subsink';

import { User } from '@its-your-practice/types';

@Injectable({ providedIn: 'root' })
export class AuthService implements OnDestroy {
  userStore = new BehaviorSubject<User>(null);
  user$: Observable<User> = this.userStore.asObservable();

  private subs = new SubSink();

  constructor(private afs: AngularFireAuth) {
    this.subs.sink = this.afs.authState
      .pipe(
        map(user => {
          if (user) {
            const _user: User = {
              name: user.displayName,
              photoUrl: user.photoURL,
              userId: user.uid
            };
            this.userStore.next(_user);
          } else {
            this.userStore.next(null);
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  /**
   * Public Class Methods
   */

  async initAuthStore() {
    return new Promise((resolve, reject) => {
      this.afs.authState.pipe(first()).subscribe(user => {
        const _user = {
          name: user.displayName,
          photoUrl: user.photoURL,
          userId: user.uid
        } as User;
        this.userStore.next(_user);
        resolve();
      });
    });
  }

  async loginWithGoolge() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afs.auth.signInWithPopup(provider);
    return credential.user.displayName;
  }

  async logout() {
    return this.afs.auth.signOut();
  }
}
