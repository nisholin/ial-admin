import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeetingRequestService {

  PHP_API_SERVER = "http://49.249.229.14/ial_canteen/category_index";

  constructor(private httpClient: HttpClient) { }

  saveMeetingrequest(name) {
    console.log(name)
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/employee_master_insert.php', { name })
    
  }
  readMeetingrequest(): Observable<any>{
		return this.httpClient.get<any>(`${this.PHP_API_SERVER}/guest_index.php`);
  } 
  updateMeetingrequest(angForm2,emp_code){
    console.log(emp_code);
    console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`, angForm2,emp_code);
	}
}
