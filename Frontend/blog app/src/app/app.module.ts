import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './service/article.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared/shared.module';
import { AuthGuardService } from './service/auth-guard.service';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { EditComponent } from './edit/edit.component';


// const appRoutes: Routes = [
//   { path: 'blog', component: BlogHomeComponent, data: {animation: 'HomePage'}},
//   { path: 'blog/post/:id',  component: ViewPostComponent,data: {animation: 'PostPage'}},
//   { path: 'login',  component: LoginComponent,data: {animation: 'LoginPage'}},
//   { path: 'register',  component: RegisterComponent,data: {animation: 'RegisterPage'}},
//   { path: 'create',  component: CreateComponent,data: {animation: 'CreatePage'}},
//   { path: '',
//     redirectTo: '/blog',
//     pathMatch: 'full'
//   },
//   // { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogHomeComponent,
    ViewPostComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ArticleService, AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }