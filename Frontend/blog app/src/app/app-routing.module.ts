import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'blog', component: BlogHomeComponent, data: {animation: 'HomePage'}},
  
  {
    path: 'blog/post/:id',  component: ViewPostComponent,data: {animation: 'PostPage'},
  },
  {
    path: 'blog/edit/:id',  component: EditComponent,data: {animation: 'EditPage'},
    canActivate: [AuthGuard]
  },

  { path: 'login',  component: LoginComponent, data: {animation: 'LoginPage'}},

  { path: 'register',  component: RegisterComponent, data: {animation: 'RegisterPage'}},

   {
    path: 'create',  component: CreateComponent,data: {animation: 'CreatePage'},
    canActivate: [AuthGuard]
  },

  {
    path: '', redirectTo: 'blog', pathMatch: 'full'
  }

  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
