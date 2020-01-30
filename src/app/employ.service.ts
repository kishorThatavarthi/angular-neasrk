import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from './form';
import {Observable} from 'rxjs';


@Injectable()
export class EmployService {
  private _url:string="/assets/data.json";

  constructor(private http:HttpClient) { }
  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url);
  }

}