import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentsModule } from './../../../../app/components/components.module';
import { FirebaseService } from '../../firebase-integration.service';
import { AuthService } from './../../../../app/services/auth.service';

import { QuotesPage } from './quotes.page';

const routes: Routes = [
  {
    path: '',
    component: QuotesPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TranslateModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ],
  declarations: [QuotesPage],
  providers: [
    //  UserProfileResolver,
    //  UserService,
    FirebaseService,
    AuthService,
    //  LanguageService
  ]
})
export class QuotesPageModule { }
