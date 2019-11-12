import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from './UserRegistration';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http113:HttpClient) { }
  public doRegistration(userReg:UserRegistration){
    let url="http://localhost:8082/registerRabi/register";
    return this.http113.post(url,userReg
      ,{responseType:'text' as 'json'});

  }
  public getUsers(){
    let url="http://localhost:8082/registerRabi/allUsers";
    return this.http113.get(url);
  }

  public getUserByEmail(email){
    let url="http://localhost:8082/registerRabi/findUserByEmail";
    return this.http113.get(url+"/"+email);
  }
  public deleteUserById(id){
    let url="http://localhost:8082/registerRabi/cancel";
    return this.http113.delete(url+"/"+id);
  }


}
