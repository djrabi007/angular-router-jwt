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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GarageComponentComponent } from './garage-component/garage-component.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { BasicAuthHttpInterceptorServiceService } from './basic-auth-http-interceptor-service.service';
import { provideRoutes } from '@angular/router';
import { CoronaComponent } from './corona/corona.component';

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
    SearchDeleteComponent,
    GarageComponentComponent,
    LoginComponent,
    PersonComponent,
    CoronaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // For Spring Security only (Login,Person)
    {
    provide:HTTP_INTERCEPTORS,
    useClass:BasicAuthHttpInterceptorServiceService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
