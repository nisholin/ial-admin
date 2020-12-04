import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanteenTimeService {

  parameters: any;

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/admin/canteen/timing";


  private baseUrl = 'http://localhost:4000/canteenmenu';

  constructor(private httpClient: HttpClient) { }
  updateCanteenTime(id: any,canteeenarray: any) {
    console.log(canteeenarray);
    /* this.parameters = "?";
    this.parameters +="id="+id; */
    return this.httpClient.put<any>(this.baseUrl + '/cateentime/'+id,canteeenarray);
  }
}
