import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../UserRegistration';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  email:String;
  usersRabi:any;
  constructor(private service123:UserRegistrationService) 
  { }
  ngOnInit() {
    let resp= this.service123.getUsers();
    resp.subscribe((data123)=>this.usersRabi=data123);
   // resp.subscribe(data123=>console.log(data123));
  }
  public deleteUser(id:number){
    let resp= this.service123.deleteUserById(id);
    resp.subscribe((data123)=>this.usersRabi=data123);
  }
  public finUserByEmailId(){
    let resp= this.service123.getUserByEmail(this.email);
    resp.subscribe((data123)=>this.usersRabi=data123);
  }


}
