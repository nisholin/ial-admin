import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanteenTimeService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/admin/canteen/timing";

  constructor(private httpClient: HttpClient) { }
  updateCanteenTime(canteentimeform,id) {
    console.log(canteentimeform);
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/updatecanteen', canteentimeform,id);
  }
}
