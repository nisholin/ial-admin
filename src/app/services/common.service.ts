import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
//models
import { CanteenTime } from '../_models/canteen/canteentime';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/master/canteen_time";
  baseUrl = "http://localhost:3000/api"
  
  currentView:boolean = false;
  viewSideNaviSource = new BehaviorSubject(this.currentView);

  constructor(private httpClient: HttpClient) { }
  readCanteentime(): Observable<CanteenTime[]>{
    return this.httpClient.get<CanteenTime[]>(`${this.PHP_API_SERVER}/index.php` )
  }
  toggleSideNavi(value?) {
    this.currentView = value === false ? value : !this.currentView
    this.viewSideNaviSource.next(this.currentView);
  } 
  /* readCanteentime(): Observable<CanteenTime[]> {
    return this.httpClient.get<CanteenTime[]>(`${this.baseUrl}` + `/users`)
  } */
}
