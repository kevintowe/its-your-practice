import { NgModule } from '@angular/core';
import { SharedModule } from '@its-your-practice/shared';

import { PoseFormDialogComponent, PosesComponent } from './components';

const COMPONENTS = [PoseFormDialogComponent, PosesComponent];
const ENTRY_COMPONENTS = [PoseFormDialogComponent];

@NgModule({
  imports: [SharedModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: ENTRY_COMPONENTS
})
export class PosesModule { }
