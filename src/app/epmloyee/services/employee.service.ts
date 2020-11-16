import { Injectable  } from '@angular/core';
import { User } from '../../_models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/master/employee_master";
  //node js api
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private httpClient: HttpClient) { }

  saveUser(angForm1) {
    console.log(angForm1);
    //console.log(from_date);
    //console.log(image);
    //console.log(to_date);
    //console.log(a_rfid_card);
    return this.httpClient.post<any>(this.PHP_API_SERVER +'/employee_master_insert.php',angForm1);
  }
  readEmployee(): Observable<User[]>{
		return this.httpClient.get<User[]>(this.PHP_API_SERVER +'/index.php');
	}
  updateEmployee(angForm2,emp_code){
    console.log(emp_code);
    console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`+angForm2,emp_code);
	}
 }

