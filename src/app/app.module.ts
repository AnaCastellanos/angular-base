// Module
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { MyDateRangePickerModule } from 'mydaterangepicker';
// Module


import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AdminComponent } from './admin/admin.component';

// Services
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AppGlobal } from './app.global';
import { ItemService } from './services/item.service';
import { ChartsService } from './services/charts.service';
// Services

import { LoaderComponent } from './elements/loader/loader.component';
import { NavbarComponent } from './elements/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminComponent,
    LoaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AmChartsModule,
    MyDateRangePickerModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AppGlobal,
    ItemService,
    ChartsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
