import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//_models
import { Menu } from "../../_models/canteen/menu";

@Injectable({
  providedIn: 'root'
})
export class MenuManagementService {
  parameters: any;
  parameters2: any;

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/admin/canteen/menu_item_mapping";
  PHP_API_SERVER2 = "http://192.168.200.49/ial_canteen/admin/canteen/menu_item_mapping";

  constructor(private httpClient: HttpClient) { }
  //get method
  /* readMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/index.php`);
  } */
  readEmployeeMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/employee_index.php`);
  }
   readEmployeeMenuList(fieldarray): Observable<Menu[]>{
    console.log(fieldarray);
    this.parameters = "?";
    this.parameters +="id="+fieldarray;
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/employeeedit.php`+ this.parameters);
  } 
  readContractorMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/contractor_index.php`);
  }
  contractorMenusShow(contmenuname): Observable<Menu[]>{
    console.log(contmenuname);
    this.parameters2 = "?";
    this.parameters2 +="id="+contmenuname;
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/contractoredit.php`+ this.parameters2);
  }
  
  //post Method 
   /*  postMenuId(fieldarray) {
    console.log(fieldarray);
    return this.httpClient.post<Menu[]>(this.PHP_API_SERVER + '/employeeedit', fieldarray);
  }   */

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
