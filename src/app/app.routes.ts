import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './authentification/login/login.component';
import { AddUserComponent } from './authentification/add-user/add-user.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'add-user', component: AddUserComponent},
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];
