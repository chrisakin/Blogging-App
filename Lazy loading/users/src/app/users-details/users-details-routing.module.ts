import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UsersDetailsComponent} from './users-details.component'

const routes: Routes = [
    { path: "", component: UsersDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDetailsRoutingModule { }
