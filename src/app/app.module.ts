import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { AuthentificationService } from './providers/authentification.service';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthentificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
