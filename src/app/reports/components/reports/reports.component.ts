import { Component, OnInit } from '@angular/core';

//_models
import { Category } from "../../../_models/common/category";
import { Company } from "../../../_models/common/company";
import { Department } from '../../../_models/employee/department';
import { Reports } from  '../../../_models/report/reports';

//services
import { ReportService } from "../../services/report.service";
import { GuestService } from '../../../epmloyee/services/guest.service';
import { FormGroup, FormControl } from '@angular/forms';

//loading
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  model           : any = {};
  department      : Department[];
  category        : Category[];
  company         : Company[];
  categoryList    : any;
  companyList     : any;
  departmentList  : any;
  tableShow       : boolean;
  reportList      : any;
  powerVal        = "";
  reports         : Reports[];
  reporDatatList  : any;
  summarytable    : boolean;
 

  constructor(private reportservice: ReportService,
    private guestservice: GuestService,
    private spinner: NgxSpinnerService
    ) { 
    this.reportservice.readCategory().subscribe((category: Category[])=>{
      this.categoryList = category;
      //console.log(this.categoryList);
    });
    this.reportservice.readCompany().subscribe((company: Company[])=>{
      this.companyList = company;
      //console.log(this.companyList);
    }); 
    this.reportservice.readCompany().subscribe((company: Company[])=>{
      this.companyList = company;
      //console.log(this.companyList);
    });
    this.guestservice.readDepartment().subscribe((department: Department[])=>{
      this.departmentList = department;
      //console.log(this.departmentList);
    }); 

    //json file get
   const reportData = require("../../../report.json");
   this.reportList = reportData;
   console.log(this.reportList);

  }
  
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.tableShow    = false;
    this.summarytable = false;
  }
  getReports(reportForm: any) {
    console.log(reportForm.value);
    this.spinner.show();
    this.reportservice.sendReportDate(reportForm.value).subscribe((reports: Reports[])=>{
      this.reporDatatList = reports;
      console.log(this.reporDatatList);
      var length = this.reporDatatList.length;
      alert(length);
      for(let i=0;i<length;i++){

      }
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
    },
    error => {
      alert('Network Error-->'+error);
    });
    //this.tableShow  = true;
    this.summarytable = true;
  }
  print() {
    let printContents, popupWin;
    printContents = document.getElementById('component1').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>IAL</title>
          <style>
          //........Customized style.......
          table {
            border-collapse: collapse;
            width: 100%;
          }
          
          th, td {
            padding: 8px;
          }
          
          tr:nth-child(even) {background-color: #f2f2f2;}
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
