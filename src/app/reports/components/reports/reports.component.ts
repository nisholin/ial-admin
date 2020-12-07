import { Component, OnInit } from '@angular/core';

//_models
import { Category } from "../../../_models/common/category";
import { Company } from "../../../_models/common/company";
import { Department } from '../../../_models/employee/department';

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

  model           : any={};
  department      : Department[];
  category        : Category[];
  company         : Company[];
  categoryList    : any;
  companyList     : any;
  departmentList  : any;
  tableShow       : boolean;
  reportList      : any;
  powerVal        = "";
 

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
    this.tableShow  = false;
  }
  getReports(reportForm: any) {
    console.log(reportForm.value);
    this.reportservice.sendReportDate(reportForm.value).subscribe(()=>{
    },
    error => {
      alert('Network Error-->'+error);
    });
    this.tableShow  = true;
  }
}
