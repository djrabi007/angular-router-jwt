import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayrollComponent } from './payroll/payroll.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PayrollComponent,
    HrhelpdeskComponent,
    ProfileComponent,
    LearningComponent,
    HomeComponent,
    TechComponent,
    RegistrationComponent,
    SearchDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
