import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHomeComponent } from './blog-home.component';
import { SharedModule } from '../shared/shared/shared.module'


@NgModule({
  declarations: [BlogHomeComponent],
  imports: [
    CommonModule,
    
    SharedModule
  ]
})
export class BlogHomeModule { }
