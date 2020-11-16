import { Component, OnInit } from '@angular/core';

//_models
import { Category } from "../../../_models/common/category";
import { Company } from "../../../_models/common/company";
import { Department } from '../../../_models/employee/department';

//services
import { ReportService } from "../../services/report.service";
import { GuestService } from '../../../epmloyee/services/guest.service';

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

  constructor(private reportservice: ReportService,private guestservice: GuestService) { 
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
  }

  ngOnInit(): void {
  }
  getReports(reportForm) {
    console.log(reportForm.value);
    this.reportservice.sendReportDate(reportForm.value).subscribe(()=>{
    },
    error => {
      alert('Network Error-->'+error);
    });
  }
}
