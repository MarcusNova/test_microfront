import { NgModule } from '@angular/core';
import { MainFormComponent } from './main-form/main-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DogList } from './cat-list/cat-list.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        MainFormComponent,
        DogList
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        MainFormComponent,
        DogList
    ],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass:  PathLocationStrategy
        }
    ],
})
export class ComponentsModule {}