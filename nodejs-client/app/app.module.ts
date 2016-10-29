import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { Http, HttpModule } from '@angular/http'
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { AppComponent }   from './app.component';
import { PersonListComponent } from './person/person-list.component'
import { PersonRegisterComponent } from './person/person-register.component'
import { PersonViewComponent } from './person/person-view.component'

import { HomeComponent } from './home/home.component'
import { routing } from './app.routes'

import { ConfigService } from './config/config.service';
import { HttpService } from './http/http.service';
import { PersonService } from './person/person.service'

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule, MaterialModule.forRoot() ],
  declarations: [ AppComponent, HomeComponent, PersonListComponent, PersonRegisterComponent, PersonViewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, ConfigService, HttpService, PersonService]
})
export class AppModule { }
