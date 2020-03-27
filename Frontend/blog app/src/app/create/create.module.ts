import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';

import { TitleHeaderComponent } from '../title-header/title-header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{SharedModule} from '../shared/shared/shared.module'


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
   
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CreateModule { }
