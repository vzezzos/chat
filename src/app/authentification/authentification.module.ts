import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthentificationService } from '../providers/authentification.service';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule } from '../modules/material.module';
import { FormModule } from '../modules/form.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormModule
  ],
  declarations: [
    LoginComponent,
    AddUserComponent,
  ],
  providers: [
    AuthentificationService,
  ]
})
export class AuthentificationModule { }
