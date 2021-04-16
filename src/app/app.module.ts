import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { InputComponentComponent } from './input-component/input-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent,
    InputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
