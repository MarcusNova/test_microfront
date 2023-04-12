import { Component } from '@angular/core';
import { BehaviorService } from './behaviors/behavior.service';
import { behaviorList } from './behaviors/constants/behavior-setup.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-form';
  constructor(
    private behaviorService: BehaviorService
  ) {
    this.behaviorService.setBehaviors(behaviorList)
  }
}
