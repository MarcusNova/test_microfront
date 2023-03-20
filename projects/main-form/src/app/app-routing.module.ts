import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('navbar/showNavbarModule').then(m => m.NavBarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
