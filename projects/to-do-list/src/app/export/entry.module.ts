import { RouterModule, Routes } from "@angular/router";
import { ToDoComponent } from "../components/to-do/to-do.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: ToDoComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class EntryModule {}