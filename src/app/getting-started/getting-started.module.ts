import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { GettingStartedPage } from './getting-started.page';
import { FirebaseService } from '../firebase/firebase-integration.service';
import { AuthService } from '../services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [GettingStartedPage],
  providers: [AuthService, FirebaseService]
})
export class GettingStartedPageModule { }
