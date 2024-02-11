import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http:HttpClient) { }

  addNote(formData:object):Observable<any>{
    return this._http.post(environment.baseUrl + 'addNote' , formData)
  }

  UpdateNote(formData:object):Observable<any>{
    return this._http.put(environment.baseUrl + 'updateNote' , formData)
  }
  getNotes(formData:object):Observable<any>{
    return this._http.post(environment.baseUrl + 'getUserNotes',formData)
  }
}
