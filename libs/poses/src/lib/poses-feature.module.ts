import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PosesHomeComponent } from './containers';
import { PosesModule } from './poses.module';
import { SharedModule } from '@its-your-practice/shared';

@NgModule({
  declarations: [PosesHomeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PosesHomeComponent
      }
    ]),
    PosesModule
  ]
})
export class PosesFeatureModule { }
