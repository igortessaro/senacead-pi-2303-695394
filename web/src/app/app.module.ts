import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, LoginComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {}
