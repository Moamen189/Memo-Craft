import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  register(formData:object):Observable<any>{
      return this._http.post(environment.baseUrl + 'signup' , formData)
  }
  login(formData:object):Observable<any>{
    return this._http.post(environment.baseUrl + 'signin' , formData)
}
}
