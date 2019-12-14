import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@its-your-practice/shared';
import { HomeContainerComponent } from './home-container';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { PosesModule } from '@its-your-practice/poses';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeContainerComponent,
        children: [
          {
            path: 'poses',
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
          },
          {
            path: '',
            redirectTo: 'poses',
            pathMatch: 'full'
          }
        ]
      }
    ]),
    PosesModule
  ],
  declarations: [HomeContainerComponent]
})
export class FeatureHomeModule { }
