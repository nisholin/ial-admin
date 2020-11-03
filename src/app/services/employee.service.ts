import { Injectable  } from '@angular/core';
import { User } from '../../app/_models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  PHP_API_SERVER = "http://localhost:8084/ial_canteen/employee";


  constructor(private httpClient: HttpClient) { }

  saveUser(angForm1) {
    console.log(angForm1);
    //console.log(from_date);
    //console.log(image);
    //console.log(to_date);
    //console.log(a_rfid_card);
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/empinsert.php', angForm1);
  }
  readProducts(): Observable<User[]>{
		return this.httpClient.get<User[]>(this.PHP_API_SERVER + '/index.php',);
	}
  updateProduct(angForm2){
    console.log(angForm2);
		return this.httpClient.put<User>(`${this.PHP_API_SERVER}/update_product.php`, angForm2);
	}
 }

