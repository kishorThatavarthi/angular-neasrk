import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class EmployService {
  private _url:string="data.json";

  constructor(private http:HttpClient) { }
  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url);
  }

}