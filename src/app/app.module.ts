import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './modules-shared/material.module';
import { FooterComponent } from './footer/footer.component';
import { AuthentificationModule } from './authentification/authentification.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormModule } from './modules-shared/form.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AuthentificationModule,
    FormModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
