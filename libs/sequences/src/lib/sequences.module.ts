import { NgModule } from '@angular/core';
import { SharedModule } from '@its-your-practice/shared';

import { PosesModule } from '@its-your-practice/poses'

import {
  SequencesListComponent,
  NewSequenceDialogComponent,
  EditSequenceComponent,
  SequenceComponent
} from './components';

import { SequenceBuilderComponent } from './sequence-builder';
import {
  SequenceStepComponent,
  PosePickerComponent
} from './sequence-builder/custom-form-control';

const COMPONENTS = [
  SequencesListComponent,
  NewSequenceDialogComponent,
  EditSequenceComponent,
  SequenceComponent,
  SequenceBuilderComponent,
  SequenceStepComponent,
  PosePickerComponent
];
const ENTRY_COMPONENTS = [NewSequenceDialogComponent];

@NgModule({
  imports: [SharedModule, PosesModule],
  declarations: [COMPONENTS],
  exports: COMPONENTS,
  entryComponents: ENTRY_COMPONENTS
})
export class SequencesModule { }
