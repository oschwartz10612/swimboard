import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerticalComponent } from './vertical/vertical.component';
import { Ng2FittextModule } from "ng2-fittext";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HorizontalComponent,
    VerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2FittextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
