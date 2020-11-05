import { Component, OnInit } from '@angular/core';
import { SummaryReportsService } from '../../services/summary-reports.service';

@Component({
  selector: 'app-summary-reports',
  templateUrl: './summary-reports.component.html',
  styleUrls: ['./summary-reports.component.css']
})
export class SummaryReportsComponent implements OnInit {

  model : any={};
  constructor(private summaryreportsservice: SummaryReportsService) { }

  ngOnInit(): void {
  }

  saveSummaryReports(summaryreports) {
    console.log(summaryreports.value)
    this.summaryreportsservice.sendSummaryReportDate(summaryreports.value).subscribe(()=>{
  },
  error => {
    alert('Network Error-->'+error);
  });
  }
}
