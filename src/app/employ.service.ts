import { Injectable } from '@angular/core';

@Injectable()
export class EmployService {

  constructor() { }
  getEmployees()
  {
    return [
      {"id":1,"name":"kishor"}
    ];
  }

}