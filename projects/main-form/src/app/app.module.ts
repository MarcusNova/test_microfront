import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools/public_api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MicroEventService } from './services/micro-events.service';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    StoreDevtoolsModule.instrument({
      logOnly: true,
      features: {
        persist: true
      }
    }),

  ],
  providers: [
    MicroEventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
