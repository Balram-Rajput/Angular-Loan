import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http'
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector : Injector, ) { }

  intercept(req,next){

    let authService = this.injector.get(AuthService);
    let tokenIzedReq = req.clone({
      setHeaders:{
        Authorization : `Bearer ${authService.getToken()}`,
        "My-Custom-Header": `${authService.getUserId()}`
      }
    })
    return next.handle(tokenIzedReq);
  }

}
