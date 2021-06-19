import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanyProfilePage } from './company-profile.page';
import { ComponentsModule } from '../../../../app/components/components.module';
import { AuthService } from '../../../../app/services/auth.service';
import { FirebaseService } from '../../firebase-integration.service';

const routes: Routes = [
  {
    path: '',
    component: CompanyProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyProfilePage],
  providers: [
    FirebaseService,
    AuthService
  ]
})
export class CompanyProfilePageModule { }
