import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//_models
import { ServiceProvider } from '../../_models/employee/service_provider';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/categorymaster_index/service_index";

  constructor(private httpClient: HttpClient) { }

  saveServiceProvider(angForm1) {
    console.log(angForm1);
    //console.log(from_date);
    //console.log(image);
    //console.log(to_date);
    //console.log(a_rfid_card);
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/empinsert.php', angForm1);
  }
  readServiceProvider(): Observable<ServiceProvider[]>{
		return this.httpClient.get<ServiceProvider[]>(this.PHP_API_SERVER + '/index.php',);
	}
  updateServiceProvider(angForm2,emp_code){
    console.log(emp_code);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/update_product.php`, angForm2,emp_code);
	}
}
