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
  empItemArr              : Array<any>= [];
  isCheckedArr            : Array<any> =[];
  empmanualentryArr       : Array<any> =[];
  isShowEditDelete        = [];
  empmanualentrylistview  : any={};
  category                : Category  [];
  categoryList            : any;
  itemcount               : any;
  empmanualentryArr1      : any={};

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
        this.itemList[i].item_count = 0;
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
  saveEmpManualEntry(saveEmpManualEntry) {
    //console.log(saveEmpManualEntry.value);
    //console.log(this.empItemArr);
    //this.empmanualentryArr =this.empItemArr.concat(saveEmpManualEntry.value);
    this.empItemArr.push(saveEmpManualEntry.value);
    this.empmanualentryArr = this.empItemArr;
    
    console.log("new array",this.empmanualentryArr);
     this.employeemanualservice.saveEmpEntry(this.empmanualentryArr).subscribe((employeemanualentry:EmployeeManualEntry[]) =>{
    },
    error => {
      //alert('Network Error-->'+error);
    });  
    this.empmanualentryArr = []; 
  }
  empMenuUpdate(index: number, itemlist: any, isChecked: boolean) {
    //console.log(itemlist);
    if (isChecked) {
      itemlist.indexVal = index;
      console.log(itemlist.item_id);
      //this.empItemArr.push({item_id: itemlist.item_id});
      console.log(this.empItemArr);

      this.isCheckedArr.push({ checked: true, indexVal: index });
      this.isShowEditDelete[index] = false;
    } else {
      this.menuremoveItem(this.isCheckedArr, index, "checked");
      this.menuremoveItem(this.empItemArr, index, "product");
      alert("Item Removed");
    }
  }
  menuremoveItem(isCheckedArr: any, index: number, type: string) {
    isCheckedArr.forEach((item, indexCheck) => {
      if (item.indexVal === index) {
        isCheckedArr.splice(indexCheck, 1);
      }
    });

    if (type === "checked") {
      this.isCheckedArr = isCheckedArr;
    } else if (type === "product") {
      this.empItemArr = isCheckedArr;
    }
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
  saveCount(itemid: any,itemcount: any,index: any) {
    //alert(itemid);
    alert(itemcount.value);
    this.empItemArr.push({item_id: itemid,item_count : itemcount.value});
    console.log(this.empItemArr);
    //$scope.empItemArr[index].item_count = itemcount;
  } 
}