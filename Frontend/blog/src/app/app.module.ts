import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { FooterComponent } from './footer/footer.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ArticleService} from './service/article.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleHeaderComponent,
    BlogHomeComponent,
    FooterComponent,
    ViewPostComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
