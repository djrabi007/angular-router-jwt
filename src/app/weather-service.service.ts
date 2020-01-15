import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private _http: HttpClient) { }
  public dailyForecast() {
    //let url ="https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22";
    let newURL="/api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22";
    return  this._http.get(newURL).map(result=>result);

    
  }
}
