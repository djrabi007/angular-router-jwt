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
import { GarageComponentComponent } from './garage-component/garage-component.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { CoronaComponent } from './corona/corona.component';


const routes: Routes = [

  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"person",component:PersonComponent},
  {path:"register",component:RegistrationComponent},
  {path:"home",component:HomeComponent},
  {path:"corona",component:CoronaComponent}

/*  
{path:"",redirectTo:"/register",pathMatch:"full"},
{path:"register",component:RegistrationComponent},
{path:"search",component:SearchDeleteComponent}

,{path:"hr",component:HrhelpdeskComponent}
,{path:"profile",component:ProfileComponent}
,{path:"garage",component:GarageComponentComponent}
*/
/*  
{path:"",redirectTo:"/home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"profile",component:ProfileComponent},
{path:"hr",component:HrhelpdeskComponent},
{path:"learning",component:LearningComponent},
{path:"payroll",component:PayrollComponent},
{path:"learning/:technology",component:TechComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
