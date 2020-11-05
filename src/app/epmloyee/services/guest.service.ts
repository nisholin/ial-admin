import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Department } from '../../_models/employee/department';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
 PHP_API_SERVER = "http://192.168.200.15:8084/ial_canteen/master/department";

  constructor(private httpClient: HttpClient) { }
   saveGuest(name) {
    console.log(name)
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/employee_master_insert.php', { name })
    
  }
  readDepartment(): Observable<Department[]>{
		return this.httpClient.get<Department[]>(`${this.PHP_API_SERVER}/index.php`);
  } 
  updateGuest(angForm2,emp_code){
    console.log(emp_code);
    console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`, angForm2,emp_code);
	}
}
