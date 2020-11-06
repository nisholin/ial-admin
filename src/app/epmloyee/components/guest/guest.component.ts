import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, Inject } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { Department } from '../../../_models/employee/department';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';


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
  userview        : any;
  departmentList  : any;

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private guestservice: GuestService) {  
    this.guestservice.readDepartment().subscribe((department: Department[])=>{
    this.departmentList = department;
    console.log(this.departmentList);
  })  
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
  /* enableUserView(empcode) {
     alert("emp code-->"+empcode);
    this.guestservice.readGuest().subscribe((user: User[])=>{
      this.user = user;
      for(let i=0; i<this.user.length;i++){
        if(empcode==this.user[i].emp_code){
          this.userview = this.user[i];
          //this.userview.emp_code = this.user[i].emp_code;
        }
      }
      this.dataSource = new MatTableDataSource(this.user);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    })
    this.newuser=false;
    this.tablehide=false;
    this.userView=true;
    this.view=true;
    this.edit=false; 
  } */
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
   /* saveNewUser(ngForm1){
     console.log(ngForm1.value)
    //alert("data-->"+this.model.emp_code);
   this.guestservice.saveGuest(ngForm1.value.emp_code).subscribe(()=>{
      
    }); 
  }  */
}