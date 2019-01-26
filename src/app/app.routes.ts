import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AuthentificationComponent } from './authentification/authentification.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'login', component: AuthentificationComponent},
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];
