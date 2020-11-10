import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
//_models
import { Guest } from "../../_models/employee/guest";
import { Department } from '../../_models/employee/department';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
 PHP_API_SERVER = "http://192.168.200.49/ial_canteen/categorymaster_index";
 PHP_API_SERVER2 = "http://192.168.200.49/ial_canteen/master/department";
 PHP_API_SERVER3 = "http://192.168.200.49/ial_canteen/master/guest";

  constructor(private httpClient: HttpClient) { }
   saveGuest(addGuestForm,guestArr) {
    console.log(addGuestForm);
    console.log(guestArr);
    return this.httpClient.post<any>(this.PHP_API_SERVER3 +'/guest_insert.php',addGuestForm)
  }
  readGuestDetails(): Observable<Guest[]>{
		return this.httpClient.get<Guest[]>(`${this.PHP_API_SERVER}/guest_index.php`);
  }
  readDepartment(): Observable<Department[]>{
		return this.httpClient.get<Department[]>(`${this.PHP_API_SERVER2}/index.php`);
  } 
  updateGuest(angForm2,emp_code){
    console.log(emp_code);
    console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`, angForm2,emp_code);
	}
}
