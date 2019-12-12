import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Sequence } from '@its-your-practice/types';
import { AppService } from '@its-your-practice/state';
import { SubSink } from 'subsink';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SequenceBuilderService implements OnDestroy {
  private subs = new SubSink();

  // sequenceId$ is observed for the lifetime of the application
  private sequenceIdStore = new BehaviorSubject<string>(null);
  private sequenceId$ = this.sequenceIdStore.asObservable();

  // This is where switchMap comes in play
  private sequenceStore = new BehaviorSubject<Sequence>(null);
  public sequence = this.sequenceStore.asObservable();

  constructor(private appService: AppService) {
    this.subs.sink = this.sequenceId$.pipe(switchMap(id => {
      if (id) {
        return this.appService.getObservableSequence(id);
      } else {
        return of(null) as Observable<Sequence>;
      }
    })).subscribe(sequence => {
      console.log(sequence);
      this.sequenceStore.next(sequence);
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public initSequence(id: string) {
    this.sequenceIdStore.next(id)
  }

  public updateSequenceSteps() { }
}