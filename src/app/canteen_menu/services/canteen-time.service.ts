import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//_models
import { CanteenTime } from '../../_models/canteen/canteentime';

@Injectable({
  providedIn: 'root'
})
export class CanteenTimeService {

  parameters: any;

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/admin/canteen/timing";


  private baseUrl = 'http://localhost:4000/canteenmenu';

  constructor(private httpClient: HttpClient) { }
  readCanteentime(): Observable<CanteenTime[]>{
    return this.httpClient.get<CanteenTime[]>(this.baseUrl + '/cateentime/view')
  }
  updateCanteenTime(id: any,canteeenarray: any) {
    console.log(canteeenarray);
    /* this.parameters = "?";
    this.parameters +="id="+id; */
    return this.httpClient.put<any>(this.baseUrl + '/cateentime/'+id,canteeenarray);
  }
  
}
