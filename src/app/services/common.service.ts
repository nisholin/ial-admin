import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { CanteenTime } from '../_models/canteentime';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/master/canteen_time";
  currentView:boolean = false;
  viewSideNaviSource = new BehaviorSubject(this.currentView);

  constructor(private httpClient: HttpClient) { }
  toggleSideNavi(value?) {
    this.currentView = value === false ? value : !this.currentView
    this.viewSideNaviSource.next(this.currentView);
  }
  readCanteentime(): Observable<CanteenTime[]>{
    return this.httpClient.get<CanteenTime[]>(`${this.PHP_API_SERVER}/index.php` )
    console.log("Datas--->"+CanteenTime)
	}
}
