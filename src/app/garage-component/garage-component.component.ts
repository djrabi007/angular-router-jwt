import { Component, OnInit } from '@angular/core';
import { GarageResolverService } from '../garage-resolver.service';

@Component({
  selector: 'app-garage-component',
  templateUrl: './garage-component.component.html',
  styleUrls: ['./garage-component.component.css']
})
export class GarageComponentComponent implements OnInit {

  cars:any;
  constructor(private service:GarageResolverService) {
    this.cars=service.getCar();
    console.log(this.cars);
   }

  ngOnInit() {
  }

}
