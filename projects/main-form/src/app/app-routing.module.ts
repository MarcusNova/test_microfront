import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
const routes: Routes = [
  {
    path: 'navbar',
    loadChildren: () => import('navbar/navbarComponents').then(m => m.EntryModule)
  },
  {
    path: 'to-do',
    loadChildren: () => import('toDoList/Module').then(m => m.EntryModule)
  },
  {
    path: '',
    component: MainFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
