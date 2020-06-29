import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from '../../shared/ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule
  ]
})
export class UsersModule { }