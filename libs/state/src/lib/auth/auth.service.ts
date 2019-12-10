import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { first, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubSink } from 'subsink';

import { User } from '@its-your-practice/types';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService implements OnDestroy {
  userStore = new BehaviorSubject<User>(null);
  user$: Observable<User> = this.userStore.asObservable();

  private subs = new SubSink();

  constructor(
    private afs: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) {
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

    // if new user, persist in database
    if (credential.additionalUserInfo.isNewUser) {
      try {
        await this.userService.saveFirstTimeUser(
          credential.user.uid,
          credential.user.displayName
        );
      } catch (err) { }
    }

    return credential.user.displayName;
  }

  async logout() {
    try {
      await this.afs.auth.signOut();
      await this.router.navigate(['/landing']);
    } catch (err) {
      return err;
    }
  }
}
