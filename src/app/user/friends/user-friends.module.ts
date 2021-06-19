import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserFriendsPage } from './user-friends.page';
import { UserService } from '../user.service';
import { UserFriendsResolver } from './user-friends.resolver';
import { ComponentsModule } from '../../components/components.module';
import { FirebaseService } from '../../../app/firebase/firebase-integration.service';
import { AuthService } from '../../../app/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: UserFriendsPage,
    // resolve: {
    //   data: UserFriendsResolver
    // }
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UserFriendsPage],
  providers: [
    UserFriendsResolver,
    UserService,
    // FirebaseService,
    // AuthService
  ]
})
export class UserFriendsPageModule { }
