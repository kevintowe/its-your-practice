import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@its-your-practice/shared'
import { PosesHomeComponent } from './containers';
import { PosesModule } from './poses.module';

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
