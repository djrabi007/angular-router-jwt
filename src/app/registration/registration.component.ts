import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../UserRegistration';
import { UserRegistrationService } from '../user-registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //userReg:UserRegistration  =new UserRegistration("","","","");
  userReg:UserRegistration  =new UserRegistration("","","");//added for JWT Integration
  message123:any;

  constructor(private service123: UserRegistrationService) { }
  
  ngOnInit() {
  }
/* invoke from Submit button click */
  public registerNow(){
    let resp=this.service123
        .doRegistration(this.userReg);
    resp.subscribe((data123=>this.message123=data123));
    }

 
}
