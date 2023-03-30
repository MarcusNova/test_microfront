import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarStoreModule } from "../store/navbar.store.module";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../components/navbar.module').then(m => m.NavBarModule)
    }
]
  

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NavbarStoreModule
    ],
    exports: [
        RouterModule
    ]
})
export class EntryModule { }
