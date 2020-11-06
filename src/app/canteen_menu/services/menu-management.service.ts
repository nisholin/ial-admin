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

  /* readMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/index.php`);
  } */
  readEmployeeMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/employee_index.php`);
  }
  readContractorMenu(): Observable<Menu[]>{
		return this.httpClient.get<Menu[]>(`${this.PHP_API_SERVER}/contractor_index.php`);
  }
}
