import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthentificationService } from '../providers/authentification.service';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule } from '../modules-shared/material.module';
import { FormModule } from '../modules-shared/form.module';
import { AuthentificationComponent } from './authentification.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormModule
  ],
  declarations: [
    AuthentificationComponent,
    LoginComponent,
    AddUserComponent,
  ],
  providers: [
    AuthentificationService,
  ]
})
export class AuthentificationModule { }
