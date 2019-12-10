import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@its-your-practice/shared'
import { LandingContainerComponent } from './landing-container/landing-container.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([
    {
      path: '',
      component: LandingContainerComponent
    }
  ])],
  declarations: [LandingContainerComponent]
})
export class FeatureLandingModule { }
