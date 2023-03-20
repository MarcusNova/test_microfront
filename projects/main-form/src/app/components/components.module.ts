import { NgModule } from '@angular/core';
import { MainFormComponent } from './main-form/main-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MainFormComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MainFormComponent
    ]
})
export class ComponentsModule {}