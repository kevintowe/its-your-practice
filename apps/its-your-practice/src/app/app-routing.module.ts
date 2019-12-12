import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AngularFireAuthGuard
} from '@angular/fire/auth-guard';

const unAuthUserGoesToLanding = () => redirectUnauthorizedTo(['landing']);
const authUserGoesToHome = () => redirectLoggedInTo(['']);

const appRoutes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('@its-your-practice/feature/landing').then(
        mod => mod.FeatureLandingModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: authUserGoesToHome }
  },
  {
    path: '',
    loadChildren: () =>
      import('@its-your-practice/feature/home').then(
        mod => mod.FeatureHomeModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: unAuthUserGoesToLanding }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
