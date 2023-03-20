import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userName = '';
  private BC = new BroadcastChannel('microchannel');
  constructor(
    private changeDectector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.BC.onmessage = (event) => {
      this.refreshData(event)
    }
  }
  refreshData(e: MessageEvent) {
    if (e.data) this.userName = e.data.name;
    this.changeDectector.detectChanges();
  }
}
