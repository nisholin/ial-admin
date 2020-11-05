import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanteenTimeService {

  PHP_API_SERVER = "http://192.168.200.15:8084/ial_canteen/employee";

  constructor(private httpClient: HttpClient) { }
  updateCanteenTime(canteentimeform) {
    console.log(canteentimeform);
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/empinsert.php', canteentimeform);
  }
}
