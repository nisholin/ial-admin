import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, Inject   } from '@angular/core';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
//services
//_modesl
import { MeetingRequest } from '../../../_models/employee/meeting_request';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['image', 'empcode', 'empname', 'department','category','rfid','actions'];
  dataSource: MatTableDataSource<any>;
  menuList: any = {};
  model : any={};
  newuser: any;
  tablehide: any;
  userView: any;
  edit: any;
  view: any;
  meetingrequest: MeetingRequest[];
  userview: any;

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  constructor() {
     /*  this.meetingrequestservice.readMeetingRequestDetails().subscribe((meetingrequest: MeetingRequest[])=>{
      this.meetingrequest = meetingrequest;
      this.dataSource = new MatTableDataSource(this.meetingrequest);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    }); */  
   }

  ngOnInit(): void {
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
    this.employeeservice.readEmpDetails().subscribe((user: User[])=>{
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
   this.employeeservice.updateUser(ngForm1.value.emp_code).subscribe(()=>{
      
    }); 
  }  */
}
