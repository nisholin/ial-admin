import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//_models
import { User } from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/master/employee_master";
  //node js api
  private baseUrl = 'http://localhost:4000/api/users';

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
  updateEmployee(empcode,angForm2){
    console.log(angForm2);
		return this.httpClient.put<any>(`${this.baseUrl}/update/`+empcode,angForm2);
	}
 }

