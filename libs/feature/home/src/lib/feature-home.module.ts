import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@its-your-practice/shared';
import { HomeContainerComponent } from './home-container';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeContainerComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@its-your-practice/poses').then(
                mod => mod.PosesFeatureModule
              )
          },
          {
            path: 'sequences',
            loadChildren: () =>
              import('@its-your-practice/sequences').then(
                mod => mod.SequencesFeatureModule
              )
          }
        ]
      }
    ])
  ],
  declarations: [HomeContainerComponent]
})
export class FeatureHomeModule { }
