import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//_models
import { MeetingRequest } from "../../_models/employee/meeting_request";

@Injectable({
  providedIn: 'root'
})
export class MeetingRequestService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/categorymaster_index/meetingrequest_index";

  constructor(private httpClient: HttpClient) { }

  saveMeetingrequest(name) {
    console.log(name)
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/employee_master_insert.php', { name })
    
  }
  readMeetingRequestDetails(): Observable<MeetingRequest[]>{
		return this.httpClient.get<MeetingRequest[]>(`${this.PHP_API_SERVER}/guest_index.php`);
  } 
  updateMeetingrequest(angForm2,emp_code){
    console.log(emp_code);
    console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`, angForm2,emp_code);
	}
}
