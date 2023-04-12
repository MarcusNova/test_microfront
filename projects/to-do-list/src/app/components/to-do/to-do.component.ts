import { Component, OnInit } from '@angular/core';
import toDoBehavior from '../../export/to-do.behavior';
import { map } from 'rxjs';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  public userName: string | null = null;

  ngOnInit(): void {
    toDoBehavior
    .pipe(
      map(name => {
        this.userName = name
      })
    )
    .subscribe()
  }
  
}
