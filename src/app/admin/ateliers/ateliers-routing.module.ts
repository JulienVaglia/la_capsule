import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AteliersEditComponent } from './ateliers-edit/ateliers-edit.component';
import { AteliersAddComponent } from './ateliers-add/ateliers-add.component';
import { AteliersIndexComponent } from './ateliers-index/ateliers-index.component';
import { AteliersDeleteComponent } from './ateliers-delete/ateliers-delete.component';

const routes: Routes = [

  {path: '', component: AteliersIndexComponent},
  {path: 'edit/:id', component: AteliersEditComponent},
  {path: 'add', component: AteliersAddComponent},
  {path: 'delete/:id', component: AteliersDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AteliersRoutingModule { }
