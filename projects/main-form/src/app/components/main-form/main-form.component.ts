import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import  behavior from 'navbar/navbarBehavior';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  checkoutForm: any = null;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    })
  }
  ngOnInit(): void {    
  }


  register(formValue: any) {
    // const event = new CustomEvent("userName", { detail: formValue });
    // dispatchEvent(event);
    behavior.next(formValue.name)
  }
}
