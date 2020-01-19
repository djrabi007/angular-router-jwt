import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorServiceService
  implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler){
   // let SECRET_VAL= 'basicAuth';  //N-1 WITHOUT JWT (Intercept only)
    let SECRET_VAL= 'token';        // N-2 WITH JWT (+Interceptor) 
    if(sessionStorage.getItem('username')
       && sessionStorage.getItem(SECRET_VAL) ){
        req= req.clone(
          {
            setHeaders :{
                Authorization:sessionStorage.getItem(SECRET_VAL)
                }
          }
        );
    }

    return next.handle(req);
  }


}
