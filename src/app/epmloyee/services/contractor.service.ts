import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//_models
import { Contract } from "../../_models/employee/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/categorymaster_index/contractor_index";

  constructor(private httpClient: HttpClient) { }

  saveContract(name) {
    console.log(name)
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/employee_master_insert.php', { name })
    
  }
  readContract(): Observable<Contract[]>{
		return this.httpClient.get<Contract[]>(`${this.PHP_API_SERVER}/guest_index.php`);
  } 
  updateContract(angForm2,emp_code){
    console.log(emp_code);
    console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`, angForm2,emp_code);
	}
}
