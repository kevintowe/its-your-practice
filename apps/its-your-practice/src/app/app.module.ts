import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Angular Fire(https://github.com/angular/angularfire)
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';

// NgRx
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { ROOT_REDUCERS, metaReducers } from './reducers';
// App State
// import { StateModule } from '@its-your-practice/state'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppService, AuthService } from '@its-your-practice/state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    AppRoutingModule,
    // StoreModule.forRoot(ROOT_REDUCERS, {
    //   metaReducers,
    //   runtimeChecks: {}
    // }),
    // StoreRouterConnectingModule.forRoot({
    //   routerState: RouterState.Minimal
    // }),
    // StoreDevtoolsModule.instrument({
    //   name: 'Its Your Practice'
    // }),
    // EffectsModule.forRoot([]),
    // StateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authService: AuthService, appService: AppService) {

  }
}
