import { Injectable } from '@angular/core';
//CUSTOM IMPORTS
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//_MODELS
import { EmployeeManualEntry } from "../../_models/manual-entry/employee-manual-entry";
import { Item } from "../../../app/_models/manual-entry/item";

@Injectable({
  providedIn: 'root'
})
export class EmployeeManualEntryService {

  private baseUrl = 'http://localhost:4000/manualentry';

  constructor(private httpClient: HttpClient) { }

  //Read
  readEmpManualEnty(): Observable<EmployeeManualEntry[]> {
    return this.httpClient.get<EmployeeManualEntry[]>(this.baseUrl +'/employee');
  }
  getEmpManualEntry(empcode: any) : Observable<EmployeeManualEntry[]> {
    console.log(empcode);
    return this.httpClient.get<EmployeeManualEntry[]>(this.baseUrl +'/manualentryemp/'+empcode);
  }
  //Read Item
  readItem(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseUrl +'/employee/item');
  }

  //save
  saveEmpEntry(empItemArr: any) {
    //console.log(empmanualentryArr);
    return this.httpClient.post<any>(this.baseUrl+'/manualentrynew',empItemArr);
  }

  //delete
  deleteEntry(id: any){
    console.log(id);
    return this.httpClient.delete<any>(this.baseUrl+'/employeedelete/'+id);
  }
  
  //update
  updateEmpManualEnty(empManualEditValues: any,id: any) {
    return this.httpClient.put<EmployeeManualEntry[]>(this.baseUrl+'/employeeedit/'+id,empManualEditValues);
  }
}
