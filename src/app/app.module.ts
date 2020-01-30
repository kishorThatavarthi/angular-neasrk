import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { EmployComponent } from './employ/employ.component';
import { EmployDetailComponent } from './employ-detail/employ-detail.component';
import { EmployService } from './employ.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,EmployComponent, EmployDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [EmployService]
})
export class AppModule { }
