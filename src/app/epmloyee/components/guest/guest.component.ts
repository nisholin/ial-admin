import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, Inject } from '@angular/core';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';
//services
import { GuestService } from '../../services/guest.service';
import { CommonService } from '../../../services/common.service';
//_models
import { Guest } from "../../../_models/employee/guest";
import { Department } from '../../../_models/employee/department';
import { CanteenTime } from '../../../_models/canteen/canteentime';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  displayedColumns: string[] = ['image', 'empcode', 'empname', 'department','category','rfid','actions'];
  dataSource  : MatTableDataSource<any>;

  menuList        : any= {};
  model           : any= {};
  newuser         : any;
  tablehide       : any;
  userView        : any;
  edit            : any;
  view            : any;
  department      : Department[];
  guest           : Guest[];
  canteentime      : CanteenTime[];
  userview        : any;
  departmentList  : any;

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(
    private guestservice: GuestService,
    private commonservice: CommonService
    ) {  
    this.guestservice.readGuestDetails().subscribe((guest: Guest[])=>{
    this.guest = guest;
    console.log(this.guest);
    this.dataSource = new MatTableDataSource(this.guest);
    this.dataSource.paginator = this.paginator.toArray()[0];
    this.dataSource.sort = this.sort.toArray()[0];
    },
      error => {
        //alert('Network Error-->'+error);
      }
    );
    this.guestservice.readDepartment().subscribe((department: Department[])=>{
      this.departmentList = department;
      console.log(this.guest);
      },
        error => {
          //alert('Network Error-->'+error);
        }
      );
      this.commonservice.readCanteentime().subscribe((canteentime: CanteenTime[])=>{
        this.canteentime = canteentime;
        console.log(canteentime);
      },
      error => {
        //alert('Network Error-->'+error);
      }
      );  
   }
  ngOnInit() {
    this.newuser=false;
    this.tablehide=true;
    this.userView=false;
    this.edit=false;
    this.view=false;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  enableGuestView(empcode) {
     alert("emp code-->"+empcode);
    this.guestservice.readGuestDetails().subscribe((guest: Guest[])=>{
      this.guest = guest;
      for(let i=0; i<this.guest.length;i++){
        if(empcode==this.guest[i].emp_code){
          this.userview = this.guest[i];
          //this.userview.emp_code = this.user[i].emp_code;
        }
      }
    });
    this.newuser=false;
    this.tablehide=false;
    this.userView=true;
    this.view=true;
    this.edit=false; 
  } 
  newUserRegister() {
    this.newuser=true;
    this.tablehide=false;
  }
  close() {
    this.newuser=false;
    this.view=false;
    this.edit=false;
    this.userView=false;
    this.tablehide=true;
  }
  editClose() {
    this.newuser=false;
    this.view=true;
    this.edit=false;
    this.tablehide=false;
  }
  userEditOpen(){
    this.edit=true;
    this.view=false;
  }
  saveGuest(addGuestForm){
     console.log(addGuestForm.value)
    //alert("data-->"+this.model.emp_code);
   this.guestservice.saveGuest(addGuestForm.value).subscribe(()=>{
    },
    error => {
      //alert('Network Error-->'+error);
    }
    ); 
  }  
}