import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@its-your-practice/shared';

import { SequencesHomeComponent } from './containers/sequences-home/sequences-home.component';
import { SequencesModule } from './sequences.module';

@NgModule({
  imports: [
    SharedModule,
    SequencesModule,
    RouterModule.forChild([
      {
        path: '',
        component: SequencesHomeComponent
      }
    ])
  ],
  declarations: [SequencesHomeComponent]
})
export class SequencesFeatureModule { }
