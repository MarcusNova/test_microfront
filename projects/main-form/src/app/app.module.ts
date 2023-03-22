import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MicroEvents } from 'shared/micro-events/src/micro-events';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [MicroEvents],
  bootstrap: [AppComponent]
})
export class AppModule { }
