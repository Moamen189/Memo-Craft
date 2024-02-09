import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient , private _Router:Router) {
    this.userData();
  }
  user:BehaviorSubject<any> = new BehaviorSubject(null);
  register(formData:object):Observable<any>{
      return this._http.post(environment.baseUrl + 'signup' , formData)
  }
  login(formData:object):Observable<any>{
    return this._http.post(environment.baseUrl + 'signin' , formData)
}

userData():void{
  const token = localStorage.getItem("_noteToken");
  if(token !== null){

    const userData = jwtDecode(token);
    this.user.next(userData)
    this._Router.navigate(['/home'])
  }
}
}


