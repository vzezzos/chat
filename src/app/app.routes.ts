import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ChatComponent } from './chat/chat.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'login', component: AuthentificationComponent},
    { path: 'chat', component: ChatComponent},
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];
