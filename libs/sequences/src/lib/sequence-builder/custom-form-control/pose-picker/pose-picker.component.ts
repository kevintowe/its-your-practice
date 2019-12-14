import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';
import { Pose } from '@its-your-practice/types';
import { SubSink } from 'subsink';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { AppService, PoseDetailEditor } from '@its-your-practice/state';
import { startWith, map, switchMap } from 'rxjs/operators';
import { ModifyDataStreams } from '@its-your-practice/state';

@Component({
  selector: 'its-your-practice-pose-picker',
  templateUrl: './pose-picker.component.html',
  styleUrls: ['./pose-picker.component.css']
})
export class PosePickerComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  // Private component state
  public store = new BehaviorSubject<Pose>(null);
  public activePose$ = this.store.asObservable();
  private subs = new SubSink();

  // Pick Pose
  public searchControl = new FormControl();
  public filteredPoses$: Observable<Pose[]>;

  onChange;
  // Control Value Accessor
  writeValue(pose: Pose): void {
    if (pose !== undefined) {
      this.store.next(pose);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

  constructor(private fb: FormBuilder, private dataStreams: ModifyDataStreams, private poseEditor: PoseDetailEditor) {
    this.subs.sink = this.activePose$.subscribe(val => { });
  }

  ngOnInit() {
    this.filteredPoses$ = this.dataStreams.getFilteredPoses(
      this.searchControl.valueChanges
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  resetComponent() {
    this.store.next(null);
  }

  async createNewPose() {
    const pose = await this.poseEditor.openEditor(null)
    if (pose) {
      this.store.next(pose);
    }
  }
}
