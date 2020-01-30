import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
  public employo=[]

  constructor(private _empService:EmployService) { }

  ngOnInit() {
  this._empService.getEmployees().subscribe(data=>this.employo=data);
  }

}