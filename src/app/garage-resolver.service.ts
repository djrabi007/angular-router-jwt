import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageResolverService {

  constructor() { }

  public getCar(){
    return 
    [
      {
        "id":123,
        "name":"Honda",
        "color":"Red"
      }
      ,
      {
        "id":127,
        "name":"BMW",
        "color":"Blue"
      }
    ];
  }

}
