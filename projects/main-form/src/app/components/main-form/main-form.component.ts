import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MicroEvents } from 'shared/micro-events/src/micro-events';
import { MicroEventService } from '../../services/micro-events.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  checkoutForm: any = null;
  constructor(
    private formBuilder: FormBuilder,
    private microEventService: MicroEventService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    })

  }
  register(formValue: any) {
    // this.microEventListener.publish("userName", { message: formValue })
    this.microEventService.on?.publish("userName", { message: formValue })
    // this.BC.postMessage(formValue)
  }
}
