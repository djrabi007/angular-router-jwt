import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { LearningComponent } from './learning/learning.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TechComponent } from './tech/tech.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';


const routes: Routes = [
/*  
{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"profile",component:ProfileComponent},
{path:"hr",component:HrhelpdeskComponent},
{path:"learning",component:LearningComponent},
{path:"payroll",component:PayrollComponent},
{path:"learning/:technology",component:TechComponent}*/

{path:"",redirectTo:"/register",pathMatch:"full"},
{path:"register",component:RegistrationComponent},
{path:"search",component:SearchDeleteComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
