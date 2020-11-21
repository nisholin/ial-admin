import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//_models
import { ContManualEntry } from "../../../app/_models/manual-entry/cont-manual-entry";

@Injectable({
  providedIn: 'root'
})
export class ContManualEntryService {

  private baseUrl = 'http://localhost:4000/manualentry/contractor';

  constructor(private httpClient: HttpClient) { }

  //view
  readContManualEnty(): Observable<ContManualEntry[]> {
    return this.httpClient.get<ContManualEntry[]>(this.baseUrl +'/users');
  }
  //update
  updateContManualEnty(contManualEditValues: any,id: any) {
    console.log(contManualEditValues);
    return this.httpClient.put<ContManualEntry[]>(this.baseUrl+'/contedit/'+id,contManualEditValues);
  }
  //delete
  //delete
  deleteEntry(id: any){
    console.log(id);
    return this.httpClient.delete<any>(this.baseUrl+'/contdelete/'+id);
  }
}
