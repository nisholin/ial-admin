import { Injectable  } from '@angular/core';
import { User } from '../../app/_models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  PHP_API_SERVER = "http://192.168.0.144:8084/ial_canteen/";
  //PHP_API_SERVER = "http://49.249.229.14/ial_canteen/master";
  //49.249.229.14:3557
  constructor(private httpClient: HttpClient) { }

  /* updateUser(user: User){
    //alert("data-->"+user.employeename);
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/employee_master_insert.php`, user);
  } */
  updateUser(angForm) {
    console.log(angForm);
    //console.log(from_date);
    //console.log(image);
    //console.log(to_date);
    //console.log(email);
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/empinsert.php', 
    {angForm })
    
  }
  readEmpDetails(): Observable<User[]>{
		return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/index.php`);
	}
  //token
setToken(token: string) {
  localStorage.setItem('token', token);
}
}

