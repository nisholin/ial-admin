import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//_models
import { CanteenTime } from '../../_models/canteen/canteentime';

@Injectable({
  providedIn: 'root'
})
export class WeeklyItemConfigService {

  private baseUrl = 'http://localhost:4000/canteenmenu/weeklyitemconfig';


  constructor(private httpClient: HttpClient) { }

  readWeeklyItemDetails(id: any): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + '/view/'+id)
  }
}
