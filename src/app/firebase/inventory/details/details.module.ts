import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';
import { ComponentsModule } from './../../../../app/components/components.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AuthService } from './../../../../app/services/auth.service';
import { FirebaseService } from '../../firebase-integration.service';


const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // FormAlertPageModule,
    // NotificationsPageModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPage],
  providers: [AuthService, FirebaseService]

})
export class DetailsPageModule { }
