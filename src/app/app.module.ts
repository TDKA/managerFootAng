import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballerComponent } from './components/footballer/footballer.component';
import { HttpClientModule } from "@angular/common/http";
import { AddPlayerComponent } from './components/add-player/add-player.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballerComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
