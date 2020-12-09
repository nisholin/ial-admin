import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//_models
import { CanteenTime } from '../../_models/canteen/canteentime';
import { WeeklyMenu } from "../../_models/canteen/weeklymenu";

@Injectable({
  providedIn: 'root'
})
export class WeeklyItemConfigService {

  private baseUrl = 'http://localhost:4000/canteenmenu/weeklyitemconfig';


  constructor(private httpClient: HttpClient) { }

  readWeeklyItemDetails(id: any): Observable<WeeklyMenu[]>{
    return this.httpClient.get<WeeklyMenu[]>(this.baseUrl + '/view/'+id)
  }
  //save
  saveExcelFile(id: any,saveFile: any) {
    return this.httpClient.post<any>(this.baseUrl +'/excelsave/'+id,saveFile);
  }
  saveweeklyMenuEditSave(weeklyMenuEdit: any) {
    console.log(weeklyMenuEdit.id);
    var id = weeklyMenuEdit.id;
    //console.log(empmanualentryArr);
    return this.httpClient.post<WeeklyMenu[]>(this.baseUrl+'/update/'+id,weeklyMenuEdit);
  }
}
