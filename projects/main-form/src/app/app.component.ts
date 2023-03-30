import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, map, Observable } from 'rxjs';
import { MicroEventService } from './services/micro-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'main-form';
  constructor(private router: Router, private microEventService: MicroEventService) {
    this.microEventService.setUp(['userName'],['/navbar']);
  }
  ngOnInit() {
    this.router.events
      .pipe(
        delay(10),
        map((val) => this.subscribeEventRouter(val))
      )
      .subscribe();
  }

  subscribeEventRouter(routerEvent: any) {
      if (routerEvent instanceof NavigationEnd) {
        this.microEventService.flushEvents(routerEvent?.url);
      }
  }
}
