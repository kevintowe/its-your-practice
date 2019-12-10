import { Injectable, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService implements OnDestroy {
  private subs = new SubSink();
  private primarySanskrit = false;
  private langStore = new BehaviorSubject<boolean>(false);

  primarySanskrit$ = this.langStore.asObservable();

  constructor() { }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  toggleLang() {
    this.langStore.next(!this.primarySanskrit);
    this.primarySanskrit = !this.primarySanskrit;
  }
}
