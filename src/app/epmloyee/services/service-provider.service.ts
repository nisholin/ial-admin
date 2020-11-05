import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  PHP_API_SERVER = "http://localhost:8084/ial_canteen/employee";


  constructor(private httpClient: HttpClient) { }

  saveServiceProvider(angForm1) {
    console.log(angForm1);
    //console.log(from_date);
    //console.log(image);
    //console.log(to_date);
    //console.log(a_rfid_card);
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/empinsert.php', angForm1);
  }
  readServiceProvider(): Observable<User[]>{
		return this.httpClient.get<User[]>(this.PHP_API_SERVER + '/index.php',);
	}
  updateServiceProvider(angForm2,emp_code){
    console.log(emp_code);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/update_product.php`, angForm2,emp_code);
	}
}
