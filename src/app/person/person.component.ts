import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  userLst:any;
  constructor(private service:RestapiService) { }

  ngOnInit() {
  }
  getUsersRR(){
    let resp=this.service.getUsers();
    console.log("** 11 resp**"+resp); 
    resp.subscribe(data=>{
      this.userLst=data;
      console.log("**Person**"+data); 
    });
      }


      doLogout(){
            this.service.logOut();
        }
}
