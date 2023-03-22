import { Component, OnInit } from '@angular/core';
import { MicroEvents } from 'shared/micro-events/src/micro-events';
import { MicroEventService } from './services/micro-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'main-form';
  constructor(private microEventService: MicroEventService) {
    this.microEventService.on?.setPersistentEvents(["userName"]);
  }
  ngOnInit() {
  }

}
