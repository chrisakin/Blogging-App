import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';

import { SharedModule } from '../shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleHeaderComponent } from '../title-header/title-header.component';
@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
   
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditModule { }
