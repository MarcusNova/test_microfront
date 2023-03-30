import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, map } from 'rxjs';
import { setName } from '../../store/navbar.actions';
import { NavbarState } from '../../store/navbar.reducer';
import { selectName } from '../../store/navbar.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public userName = '';
  private subscription$: any;
  constructor(
    private store: Store<NavbarState>,
  ) {
  }

  ngOnInit(): void {
    this.subscription$ = fromEvent(window, "userName")
    .pipe(
      map((e: any) => {
        this.refreshData(e?.detail)
      })
    )
    .subscribe();
    this.store.select(selectName)
      .pipe(
        map(({ name }) => {
          if (name) this.userName = name;
        })
      )
      .subscribe()
  }
  refreshData(data: any) {
    if (data) {
      this.store.dispatch(setName({ payload: data.name }))
    }
  }
  
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  
}
