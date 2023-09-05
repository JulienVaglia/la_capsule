import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { IntervenantsComponent } from './intervenants/intervenants.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  { path: '', component: ClientLayoutComponent, children: [ // Sert de sous-routing afin d'afficher le layout (visuel) adapté aux clients

  //{ path: '', redirectTo: 'home', pathMatch: 'full' }, 1ère méthode : Permet la redirection vers home quand on arrive à la source
    { path: '', component: HomeComponent }, // 2eme méthode ( plus rapide et facile)
    { path: 'ateliers', component: AteliersComponent },
    { path: 'intervenants', component: IntervenantsComponent },
    { path: 'contact', component: ContactComponent }

  ]}

  
  
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Routing pour les pages enfants de la racine
  exports: [RouterModule]
})
export class ClientRoutingModule { }
