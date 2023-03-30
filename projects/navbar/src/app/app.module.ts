import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarStoreModule } from './store/navbar.store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    NavbarStoreModule,
    StoreDevtoolsModule.instrument({
      logOnly: true,
      features: {
        persist: true
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
