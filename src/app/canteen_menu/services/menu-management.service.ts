import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//_models
import { Menu } from "../../_models/canteen/menu";

@Injectable({
  providedIn: 'root'
})
export class MenuManagementService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/admin/canteen/menu_item_mapping";

  constructor(private httpClient: HttpClient) { }
  //get method
  /* readMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/index.php`);
  } */
  readEmployeeMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/employee_index.php`);
  }
  readEmployeeMenuList(menu): Observable<Menu[]>{
    console.log("data-->"+menu);
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/employee_index.php`+menu);
  }
  readContractorMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/contractor_index.php`);
  }
  //update Method
  updateEmpMenu(empeditupdateForm){
    console.log(empeditupdateForm);
    //console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`, empeditupdateForm);
  }
  updateContMenu(empeditupdateForm){
    console.log(empeditupdateForm);
    //console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/empupdate.php`, empeditupdateForm);
	}
}
