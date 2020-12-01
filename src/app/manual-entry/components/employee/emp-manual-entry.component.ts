import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig } from "@angular/material/dialog";
//table
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

//services
import { EmployeeManualEntryService } from "../../services/employee-manual-entry.service";
import { CommonService } from '../../../services/common.service';
import { ReportService } from "../../../reports/services/report.service";
//_models
import { EmployeeManualEntry } from "../../../_models/manual-entry/employee-manual-entry";
import { CanteenTime } from '../../../_models/canteen/canteentime';
import { Item } from "../../../_models/manual-entry/item";
import { Category } from "../../../_models/common/category";
import { merge } from 'jquery';

@Component({
  selector: 'app-emp-manual-entry-component',
  templateUrl: './emp-manual-entry.component.html',
  styleUrls: ['./emp-manual-entry.component.css']
})
export class EmployeeManualEntryComponent implements OnInit {

  displayedColumns      : string[] = ['no', 'manualcode', 'canteentype', 'categoryid','empcode','empname','itemid','date','actions'];
  dataSource            : MatTableDataSource<any>;

  dialogConfig          = new MatDialogConfig();
  isDtInitialized       : boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  model                   : any={};
  count                   : any={};
  employeemanualentry     : EmployeeManualEntry[];
  canteentime             : CanteenTime[];
  Item                    : Item [];
  empmanualentrylist      : any;
  newuser                 : any;
  tablehide               : any;
  userView                : any;
  edit                    : any;
  view                    : any;
  canteentimelist         : any={};
  upload                  : any;
  empManualList           : any={};
  itemList                : any;
  isCheckedArr            : Array<any> =[];
  empmanualentryArr       : Array<any> =[];
  isShowEditDelete        = [];
  empmanualentrylistview  : any = {};
  category                : Category [];
  categoryList            : any;
  itemcount               : any;
  
  //
  empItemArr              : any = [];
  empmanualentryArrs      : any = [];
  array1                  : any = [];
  array2                  : any = [];
  array3                  : any = [];
  str                     : any = {};
  str1                    : any = {};

  constructor(
    private employeemanualservice: EmployeeManualEntryService,
    private commonservice: CommonService,
    private reportservice: ReportService
  ) 
  {
    this.employeemanualservice.readEmpManualEnty().subscribe((employeemanualentry: EmployeeManualEntry[])=>{
      this.empmanualentrylist = employeemanualentry;
      console.log(this.empmanualentrylist);
      this.dataSource = new MatTableDataSource(this.empmanualentrylist);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    },
    error => {
      //alert('Network Error-->'+error);
    });
    
    this.reportservice.readCategory().subscribe((category: Category[])=>{
      this.categoryList = category;
      //console.log(this.categoryList);
    },error => {
      //alert('Network Error-->'+error);
    });
   }

  ngOnInit(): void {
    this.tablehide          = true;
    this.newuser            = false;
    this.upload             = false;
    this.userView           = false;

    this.empmanualentryArr  = [];
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
    this.employeemanualservice.readItem().subscribe((item: Item[])=>{
      this.itemList = item;
      
      for(let i=0;i<this.itemList.length;i++){
        this.itemList[i].item_count = '';
      }
      //alert(this.canteentimelist.length);
      console.log(this.itemList);
    },
    error => {
      //alert('Network Error-->'+error);
    });
  }
  newEmpManualUpload() {
    this.upload     = true;
    this.newuser    = false;
    this.tablehide  = false;
  }
  empManualEntyrEdit(id: any){
    this.employeemanualservice.readEmpManualEnty().subscribe((employeemanualentry: EmployeeManualEntry[])=>{
      this.empmanualentrylist = employeemanualentry;
      for(let i=0;i<this.empmanualentrylist.length;i++){
        if( id == this.empmanualentrylist[i].id){
          this.empmanualentrylistview = this.empmanualentrylist[i];
          console.log(this.empmanualentrylistview);
        }
      }
    },
    error => {
      //alert('Network Error-->'+error);
    }); 
    this.userView   = true;
    this.tablehide  = false;
    this.newuser    = false;
    this.view       = false;
    this.edit       = false;
    this.upload     = false;
  }
  close() {
    this.tablehide  = true;
    this.newuser    = false;
    this.view       = false;
    this.edit       = false;
    this.userView   = false;
    this.upload     = false;
  }
  getEmpDetails(empcode) {
    //alert("test"+empcode.value);
    this.employeemanualservice.getEmpManualEntry(empcode.value).subscribe((employeemanualentry:EmployeeManualEntry[]) =>{
      this.empManualList        = employeemanualentry;
      this.model.emp_name       = this.empManualList[0].emp_name;
      this.model.category_name  = this.empManualList[0].category_name;
      this.model.category_id    = this.empManualList[0].category_id;
      //alert(this.empManualList[0].emp_name);
      },
      error => {
        //alert('Network Error-->'+error);
      });
  }
  saveEmpManualEntry(saveEmpManualEntry: any) {
    //
    this.array1 = [];
    this.array2 = [];
    this.array3 = [];

    var ele = document.getElementsByTagName('input');
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].type == 'number') {
        if(ele[i].value != ''){
          this.array1.push(ele[i].value);
          this.str = this.array1.join(',');          
        }
      }

      if (ele[i].type == 'checkbox') {
        if(ele[i].checked === true){
          this.array2.push(ele[i].value);
          this.str1 = this.array2.join(','); 
        }
      }
    }

    this.array3.push({ item_id: this.str1,item_count: this.str },saveEmpManualEntry.value);
    console.log(this.array3);
     this.employeemanualservice.saveEmpEntry(this.array3).subscribe(() =>{
    },
    error => {
      //alert('Network Error-->'+error);
    });  
  }
  deleteEntry(id: any){
    this.employeemanualservice.deleteEntry(id).subscribe(() =>{
    },
    error => {
      //alert('Network Error-->'+error);
    });
  }
  empManualEditSave(empManualEditValues: any,id : any) {
    alert(id);
    console.log(empManualEditValues.value);
    this.employeemanualservice.updateEmpManualEnty(empManualEditValues.value,id).subscribe((employeemanualentry: EmployeeManualEntry[])=>{
      alert("Updated Successfully");
      //this.empmanualentrylist = employeemanualentry;
      //console.log(this.empmanualentrylist);
    },
    error => {
      //alert('Network Error-->'+error);
    });
  }
}