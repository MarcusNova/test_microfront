import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class DogList implements OnInit{
  public randomeDog: any = null;
  constructor(public http: HttpClient) {}
  ngOnInit(): void {  
    this.http.get<any>('https://dog.ceo/api/breeds/image/random')
    .pipe(
      map(answer => {
        if (answer) this.randomeDog = answer.message
      })
    )
   .subscribe()
  }
}
