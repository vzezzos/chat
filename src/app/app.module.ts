import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './modules/material.module';
import { FooterComponent } from './footer/footer.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormModule } from './modules/form.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AuthentificationModule,
    FormModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
