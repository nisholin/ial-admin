import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "../../_models/common/category";
import { Observable } from 'rxjs';
import { Company } from "../../_models/common/company";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/master/category_master";
  PHP_API_SERVER1 = "http://192.168.200.49/ial_canteen/master/company_master";

  constructor(private httpClient: HttpClient) { 
  }
  readCategory(): Observable<Category[]>{
		return this.httpClient.get<Category[]>(`${this.PHP_API_SERVER}/index.php`);
  }
  readCompany(): Observable<Company[]>{
		return this.httpClient.get<Company[]>(`${this.PHP_API_SERVER1}/index.php`);
  }
  sendReportDate(reportForm) {
    console.log(reportForm)
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/empinsert.php', reportForm);
  }
}
