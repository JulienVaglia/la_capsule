import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AteliersRoutingModule } from './ateliers-routing.module';
import { AteliersIndexComponent } from './ateliers-index/ateliers-index.component';
import { AteliersEditComponent } from './ateliers-edit/ateliers-edit.component';
import { AteliersAddComponent } from './ateliers-add/ateliers-add.component';
import { AteliersDeleteComponent } from './ateliers-delete/ateliers-delete.component';


@NgModule({
  declarations: [
    AteliersIndexComponent,
    AteliersEditComponent,
    AteliersAddComponent,
    AteliersDeleteComponent
  ],
  imports: [
    CommonModule,
    AteliersRoutingModule
  ]
})
export class AteliersModule { }
