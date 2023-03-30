import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  checkoutForm: any = null;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    })
  }
  register(formValue: any) {
    const event = new CustomEvent("userName", { detail: formValue });
    dispatchEvent(event);
  }
}
