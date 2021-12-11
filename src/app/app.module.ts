import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberAreaModule } from './member-area/member-area.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LogInComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MemberAreaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
