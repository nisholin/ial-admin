import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

//services
import { ContManualEntryService } from "../../services/cont-manual-entry.service";
import { CommonService } from '../../../services/common.service';
import { ReportService } from "../../../reports/services/report.service";
import { EmployeeManualEntryService } from "../../services/employee-manual-entry.service";
//_models
import { EmployeeManualEntry } from "../../../_models/manual-entry/employee-manual-entry";
import { CanteenTime } from '../../../_models/canteen/canteentime';
import { ContManualEntry } from "../../../_models/manual-entry/cont-manual-entry";
import { Category } from "../../../_models/common/category";
import { Item } from "../../../_models/manual-entry/item";

@Component({
  selector: 'app-cont-manual-entry',
  templateUrl: './cont-manual-entry.component.html',
  styleUrls: ['./cont-manual-entry.component.css']
})
export class ContractorManualEntryComponent implements OnInit {

  displayedColumns      : string[] = ['no', 'manualcode', 'canteentype', 'categoryid','empcode','empname','itemid','date','actions'];
  dataSource            : MatTableDataSource<any>;

  dialogConfig          = new MatDialogConfig();
  isDtInitialized       : boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  model                     : any = {};
  contEditView              : any;
  tablehide                 : any;
  userView                  : any;
  edit                      : any;
  view                      : any;
  upload                    : any;
  contmanualentrylist       : any;
  contmanualentry           : ContManualEntry[];
  contmanualentrylistview   : any;
  category                  : Category  [];
  categoryList              : any;
  savedItems                : any;

  //
  array1                    = [];
  array2                    = [];
  array3                    = [];
  str                       : any = {};
  str1                      : any = {};

  constructor(
    private contmanualentryservice: ContManualEntryService,
    private commonservice: CommonService,
    private reportservice: ReportService,
    private employeemanualservice: EmployeeManualEntryService,
  ) 
  { 
    this.contmanualentryservice.readContManualEnty().subscribe((contmanualentry: ContManualEntry[])=>{
      this.contmanualentrylist = contmanualentry;
      console.log(this.contmanualentrylist);
      this.dataSource = new MatTableDataSource(this.contmanualentrylist);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    },error => {
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
    this.array1             = [];
    this.array2             = [];
    this.array3             = [];



    this.tablehide        = true;
    this.contEditView     = false;
    this.upload           = false;
    this.userView         = false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  close() {
    this.tablehide  = true;
    this.contEditView    = false;
    this.view       = false;
    this.edit       = false;
    this.userView   = false;
    this.upload     = false;
  }
  newEmpManualUpload() {
    this.upload           = true;
    this.contEditView     = false;
    this.tablehide        = false;
  }
  contManualEntyrEdit(id: any) {
    alert(id);
    this.contmanualentryservice.readContManualEnty().subscribe((contmanualentry: ContManualEntry[])=>{
      this.contmanualentrylist = contmanualentry;
      console.log(this.contmanualentrylist);
      for(let i=0;i<this.contmanualentrylist.length;i++){
        if( id== this.contmanualentrylist[i].id){
          this.contmanualentrylistview = this.contmanualentrylist[i];
          console.log(this.contmanualentrylistview);
        }
      }
    },
    error => {
      //alert('Network Error-->'+error);
    });

 //Read Saved Items 
 this.employeemanualservice.readSavedItem(id).subscribe((item:Item[])=>{
  this.savedItems = item;
  console.log(this.savedItems);
},
error => {
  //alert('Network Error-->'+error);
}); 

    this.contEditView     = true;
    this.tablehide        = false;
  }
  contManualEditSave(contManualEditValues: any,id : any) {

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
     this.array3.push({ item_id: this.str1,item_count: this.str },contManualEditValues.value);
    console.log(this.array3);
    this.contmanualentryservice.updateContManualEnty(this.array3,id).subscribe((contmanualentry: ContManualEntry[])=>{
      alert("Updated Successfully");
    },
    error => {
      //alert('Network Error-->'+error);
    });
  }
  deleteCont(id: any) {
    console.log(id);
    this.contmanualentryservice.deleteEntry(id).subscribe(() =>{
      alert("Deleted Successfully");
    },
    error => {
      //alert('Network Error-->'+error);
    });
  }
}
