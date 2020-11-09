import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//_models
import { Menu } from "../../_models/canteen/menu";

@Injectable({
  providedIn: 'root'
})
export class MenuManagementService {
  parameters    : any;
  parameters2   : any;
  parameters3   : any;

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/admin/canteen/menu_item_mapping";
  PHP_API_SERVER2 = "http://192.168.200.49/ial_canteen/admin/canteen/menu_item_mapping";

  constructor(private httpClient: HttpClient) { }

  //get method
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
  
  //update
 /*  updateMenu(prodArr,menu: any) {
    console.log(prodArr);
    this.parameters3 = "?";
    this.parameters3 +="menu="+menu;
    console.log(this.parameters3)
    return this.httpClient.put<Menu[]>(this.PHP_API_SERVER + '/employeeedit',this.parameters3,prodArr);
  }   */
  updateEmpMenu(empArr,menu: any){
    console.log(empArr);
    console.log(menu);
    return this.httpClient.put<Menu[]>(this.PHP_API_SERVER + '/employeeupdate.php',menu,empArr);
  }
  updateContMenu(contArr,menu: any){
    console.log(contArr);
    console.log(menu);
    //console.log(angForm2);
		return this.httpClient.put<any>(`${this.PHP_API_SERVER}/contractorupdate.php`,menu,contArr);
	}
}
