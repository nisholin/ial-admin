import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanteenTimeService {

  parameters: any;

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/admin/canteen/timing";

  constructor(private httpClient: HttpClient) { }
  updateCanteenTime(canteeenarray) {
    console.log(canteeenarray);
    /* this.parameters = "?";
    this.parameters +="id="+id; */
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/updatecanteen',canteeenarray);
  }
}
