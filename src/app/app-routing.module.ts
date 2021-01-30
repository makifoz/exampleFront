import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component'
import {PageableListComponent} from './pageable-list/pageable-list.component'
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pageable-list', component: PageableListComponent,canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
