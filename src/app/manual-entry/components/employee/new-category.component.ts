import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

//services
import { EmployeeManualEntryService } from "../../services/employee-manual-entry.service";
import { CommonService } from '../../../services/common.service';
//_models
import { EmployeeManualEntry } from "../../../_models/manual-entry/employee-manual-entry";
import { CanteenTime } from '../../../_models/canteen/canteentime';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  displayedColumns      : string[] = ['no', 'manualcode', 'canteentype', 'categoryid','empcode','empname','itemid','date','actions'];
  dataSource            : MatTableDataSource<any>;

  dialogConfig          = new MatDialogConfig();
  isDtInitialized       : boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  model                 : any;
  employeemanualentry   : EmployeeManualEntry[];
  empmanualentrylist    : any;
  newuser               : any;
  tablehide             : any;
  userView              : any;
  edit                  : any;
  view                  : any;
  canteentime           : CanteenTime[];
  canteentimelist       : any;
  upload                : any;

  constructor(
    private employeemanualservice: EmployeeManualEntryService,
    private commonservice: CommonService,
  ) 
  {
    this.employeemanualservice.readEmpManualEnty().subscribe((employeemanualentry: EmployeeManualEntry[])=>{
      this.empmanualentrylist = employeemanualentry;
      console.log(this.empmanualentrylist);
      this.dataSource = new MatTableDataSource(this.empmanualentrylist);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    }); 

    this.commonservice.readCanteentime().subscribe((canteentime: CanteenTime[])=>{
      this.canteentimelist = canteentime;
      console.log(canteentime);
    },
    error => {
      //alert('Network Error-->'+error);
    });
   }

  ngOnInit(): void {
    this.newuser    = false;
    this.tablehide  = true;
    this.upload     = false;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  newEmpManualEntry() {
    this.newuser    = true;
    this.tablehide  = false;
    this.upload     = false;
  }
  newEmpManualUpload() {
    this.upload     = true;
    this.newuser    = false;
    this.tablehide  = false;
  }
  close() {
    this.newuser    = false;
    this.view       = false;
    this.edit       = false;
    this.userView   = false;
    this.tablehide  = true;
    this.upload     = false;
  }
}
