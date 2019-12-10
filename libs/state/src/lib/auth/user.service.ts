import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SubSink } from 'subsink';
import { User } from '@its-your-practice/types';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  private subs = new SubSink();
  private USER_DB_REF = this.afs.collection<User>('user');
  private userStore = new BehaviorSubject<User>(null);

  public user$ = this.userStore.asObservable();

  constructor(private afs: AngularFirestore, afAuth: AngularFireAuth) {
    this.subs.sink = afAuth.user
      .pipe(
        switchMap(user => {
          if (user) {
            return this.USER_DB_REF.doc<User>(user.uid).valueChanges();
          } else {
            return of(null);
          }

        })
      )
      .subscribe(user => {
        this.userStore.next(user);
      });
  }

  async saveFirstTimeUser(userId: string, name: string) {
    try {
      await this.USER_DB_REF.doc<User>(userId).set({ name })
      return;
    } catch (err) {
      return err
    }
  }
}
