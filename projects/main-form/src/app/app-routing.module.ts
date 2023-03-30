import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryModule } from 'navbar/showNavbarModule';
import { DogList } from './components/cat-list/cat-list.component';
import { MainFormComponent } from './components/main-form/main-form.component';
const routes: Routes = [
  {
    path: 'navbar',
    loadChildren: () => import('navbar/showNavbarModule').then(m => m.EntryModule)
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
