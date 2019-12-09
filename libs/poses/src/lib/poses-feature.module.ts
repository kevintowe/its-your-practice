import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PosesComponent } from './containers';

@NgModule({
  declarations: [PosesComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PosesComponent
      }
    ])
  ]
})
export class PosesModule { }
