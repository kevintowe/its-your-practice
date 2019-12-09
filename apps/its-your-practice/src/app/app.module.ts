import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Angular Fire(https://github.com/angular/angularfire)
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, metaReducers } from './reducers';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

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
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {}
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    StoreDevtoolsModule.instrument({
      name: 'Its Your Practice'
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
