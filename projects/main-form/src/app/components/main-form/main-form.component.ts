import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorService } from '../../behaviors/behavior.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  checkoutForm: any = null;
  constructor(
    private formBuilder: FormBuilder,
    private behaviorService: BehaviorService
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
    this.behaviorService.dispatch('name', formValue.name)
  }
}
