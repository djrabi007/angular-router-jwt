import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  userLst:any;
  countryname:string;
  constructor(private service:RestapiService) { }
  ngOnInit() {
  }

  getCoronaRR(){
    let resp=this.service.getCORONAUsersOfIndia(this.countryname);
    console.log("** 11 resp**"+resp +" countryname = "+this.countryname); 
    resp.subscribe(data=>{
      this.userLst=data;
      console.log("**Corona List**"+data); 
    });
      }

}
