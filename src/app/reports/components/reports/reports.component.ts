import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

//_models
import { Category } from "../../../_models/common/category";
import { Company } from "../../../_models/common/company";
import { Department } from '../../../_models/employee/department';
import { Reports } from  '../../../_models/report/reports';
//services
import { ReportService } from "../../services/report.service";
import { GuestService } from '../../../epmloyee/services/guest.service';
import { ExcelService } from '../../../services/excel.service';
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
  reportsArr      : Array<any>= [];
  total           : any = {};
 

  constructor(private reportservice: ReportService,
    private guestservice: GuestService,
    private spinner: NgxSpinnerService,
    private excelService:ExcelService
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
    this.reportsArr   = [];
  }
  getReports(reportForm: any,id: any,company_id: any,dept_id: any) {
    this.spinner.show();
    //console.log(reportForm.value);
    //console.log("id===>"+id);
    //console.log("company_id==>"+company_id);
    //console.log("dept_id==>"+dept_id);
    this.reportsArr.push({"from_date": reportForm.value.from_date,"to_date": reportForm.value.to_date,"id": id,"company_id": company_id,"dept_id": dept_id});
    console.log(this.reportsArr);
    //this.spinner.show();
    this.reportservice.sendReportDate(this.reportsArr).subscribe((reports: Reports[])=>{
      this.reporDatatList = reports;
      //console.log(this.reporDatatList);
      var length = this.reporDatatList.length;
      for(let i=0;i<length;i++) {
        this.model = this.reporDatatList[i].total;
        console.log(this.model);
        this.total += this.model;
        console.log("total"+this.total);
      }
      
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        document.forms["id_form"].reset();
        this.spinner.hide();
      }, 1000);
      this.reportsArr   = [];
    },
    error => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        document.forms["id_form"].reset();
        this.spinner.hide();
      }, 1000);
      alert('Network Error-->'+error);
    });
    //this.tableShow  = true;
    this.summarytable = true;
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.reporDatatList,'report-list');
  }
}
