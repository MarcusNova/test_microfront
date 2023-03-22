import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MicroEvents } from 'shared/micro-events/src/micro-events';
import { MicroEventService } from '../../services/micro-events.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userName = '';
  // private BC = new BroadcastChannel('microchannel');
  constructor(
    private changeDectector: ChangeDetectorRef,
    private microEventService: MicroEventService
  ) {
  }

  ngOnInit(): void {
    // this.microEventListener.subscribe("userName", (payload) => {

    //   this.refreshData(payload.detail.message)
    //   return {
    //     name: ''
    //   }
    // })
    this.microEventService.on?.subscribe("userName", (payload) => {
      this.refreshData(payload.detail.message)
    })
  }
  refreshData(data: any) {
    if (data) this.userName = data.name;
    this.changeDectector.detectChanges();
  }
}
