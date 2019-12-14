import { Injectable } from "@angular/core";
import { Sequence } from '@its-your-practice/types';
import { BehaviorSubject, Subject } from 'rxjs';
import { first, skip } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable({ providedIn: 'root' })
export class SequenceDetailEditor {

  private editorStore = new Subject<Sequence>();
  public sequenceEditor$ = this.editorStore.asObservable();

  private persistSequenceStore = new Subject<Sequence>();
  private persistSequence$ = this.persistSequenceStore.asObservable();

  constructor(private appService: AppService) { }

  async openEditor(sequence: Sequence) {
    this.editorStore.next(sequence);  // home component is subscribed to sequenceEditor$ and will open Editor Dialog

    const persistMe = await this.persistSequence$.pipe(first()).toPromise();

    if (persistMe) {
      if (sequence) {
        return this.appService.persistSequence(persistMe);
      } else {
        const newSequence = await this.appService.createSequence(persistMe);
        return newSequence;
      }
    } else {
      return null;
    }
  }

  persistSequence(sequence: Sequence) {
    this.persistSequenceStore.next(sequence);
  }
}