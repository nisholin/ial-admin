import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummaryReportsService {

  PHP_API_SERVER = "http://192.168.200.15:8084/ial_canteen/employee";

  constructor(private httpClient: HttpClient) { }
  sendSummaryReportDate(summaryreports){
    return this.httpClient.post<any>(this.PHP_API_SERVER + '/empinsert.php', summaryreports);
  }
}
