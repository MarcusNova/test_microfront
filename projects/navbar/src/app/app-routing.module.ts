import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarModule } from './components/navbar.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/navbar.module').then(m => m.NavBarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NavBarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
