import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { MenuComponent } from './core/component/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login' , pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'menu', component: MenuComponent},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
