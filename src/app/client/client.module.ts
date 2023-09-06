import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { IntervenantsComponent } from './intervenants/intervenants.component';
import { ContactComponent } from './contact/contact.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    HomeComponent,
    AteliersComponent,
    IntervenantsComponent,
    ContactComponent,
    ClientLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatCardModule, 
    MatButtonModule
  ]
})
export class ClientModule { }
