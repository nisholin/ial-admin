import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//_models
import { Category } from "../../_models/common/category";
import { Company } from "../../_models/common/company";
import { Reports } from  '../../_models/report/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  PHP_API_SERVER = "http://192.168.200.49/ial_canteen/master/category_master";
  PHP_API_SERVER1 = "http://192.168.200.49/ial_canteen/master/company_master";
  baseUrl = "http://localhost:4000/manualentry/employee";
  baseUrl2 = "http://localhost:4000/report";


  constructor(private httpClient: HttpClient) { 
  }
  readCategory(): Observable<Category[]>{
		return this.httpClient.get<Category[]>(this.baseUrl+'/category');
  }
  readCompany(): Observable<Company[]>{
		return this.httpClient.get<Company[]>(`${this.PHP_API_SERVER1}/index.php`);
  }
  sendReportDate(reportForm: any) {
    console.log(reportForm)
    return this.httpClient.post<Reports[]>(this.baseUrl2+ '/summaryview',reportForm);
  }
}
