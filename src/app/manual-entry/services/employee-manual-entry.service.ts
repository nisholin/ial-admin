import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//_models
import { EmployeeManualEntry } from "../../_models/manual-entry/employee-manual-entry";

@Injectable({
  providedIn: 'root'
})
export class EmployeeManualEntryService {

  private baseUrl = 'http://localhost:4000/manualentry';

  constructor(private httpClient: HttpClient) { }

  readEmpManualEnty(): Observable<EmployeeManualEntry[]> {
    return this.httpClient.get<EmployeeManualEntry[]>(this.baseUrl +'/employee');
  } 
}
