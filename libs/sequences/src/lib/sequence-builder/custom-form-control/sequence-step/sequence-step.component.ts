import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { SequenceStep } from '@its-your-practice/types';
import { FormGroup, FormBuilder, ControlValueAccessor } from '@angular/forms';
import { SubSink } from 'subsink';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'its-your-practice-sequence-step',
  templateUrl: './sequence-step.component.html',
  styleUrls: ['./sequence-step.component.css']
})
export class SequenceStepComponent implements OnInit, OnDestroy {
  // State Management, aka Store
  private store = new BehaviorSubject<SequenceStep>(null);
  public sequenceStep$ = this.store.asObservable();

  // Data Subscriptions
  private subs = new SubSink();

  stepForm: FormGroup;

  private _sequenceStep: SequenceStep;

  @Input()
  set step(step: SequenceStep) {
    this._sequenceStep = step || null;
  }
  get step() {
    return this._sequenceStep;
  }

  @Output() saveStep = new EventEmitter<SequenceStep>();

  onChange;
  // Custom Form Control
  writeValue(value: any): void {
    if (value !== undefined) {
      // logic here
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  change($event) {

  }




  constructor(private fb: FormBuilder) {
    this.buildForm();
    this.stepForm.valueChanges.subscribe((step: SequenceStep) => {
      if (step) {
        this.saveStep.next(step);
      }
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  buildForm() {
    this.stepForm = this.fb.group({

    })
  }

}
