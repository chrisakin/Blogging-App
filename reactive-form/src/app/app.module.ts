import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogFormComponent } from './reative-form/blog-form/blog-form.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BlogFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
