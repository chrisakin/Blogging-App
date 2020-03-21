import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'blog', component: BlogHomeComponent},
  { path: 'blog/post/:id',  component: ViewPostComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'register',  component: RegisterComponent},
  { path: 'create',  component: CreateComponent},
  { path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
