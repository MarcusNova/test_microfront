import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, map, Observable } from 'rxjs';
import { MicroEventService } from './services/micro-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-form';
  constructor() {
  }
}
