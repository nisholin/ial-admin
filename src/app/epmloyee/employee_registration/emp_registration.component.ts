import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, Inject  } from '@angular/core';
import * as Chartist from 'chartist';
import { from } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { User } from '../../_models/user';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-emp_registration',
  templateUrl: './emp_registration.component.html',
  styleUrls: ['./emp_registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
  displayedColumns: string[] = ['image', 'empcode', 'empname', 'department','category','rfid','actions'];
  dataSource: MatTableDataSource<any>;
  menuList: any = {};
  model : any={};
  newuser: any;
  tablehide: any;
  userView: any;
  edit: any;
  view: any;
  user: User[];
  userview: any;
  emp_code: "";
  userList: any;

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private employeeservice: EmployeeService) {  
    this.employeeservice.readProducts().subscribe((user:User[]) =>{
      this.userList = user;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    },
      error => {
        alert('Error -->'+error);
      }
    );  
/*     this.employeeservice.updateProduct().subscribe((user: User)=>{
      console.log("Product updated" , user);
    } */
    /* const userdata = require("../../../assets/userdata.json");
    this.userList=userdata;
    this.dataSource = new MatTableDataSource(this.userList);
    this.dataSource.paginator = this.paginator.toArray()[0];
    this.dataSource.sort = this.sort.toArray()[0];   */
}
  ngOnInit() {
    this.newuser=false;
    this.tablehide=true;
    this.userView=false;
    this.edit=false;
    this.view=false;
    //this.loadUser();
  }

  /*  loadUser(){
    this.employeeservice.readProducts().subscribe((user:User[]) =>{
      this.userList = user;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    },
       error => {
        console.log('Error -->'+error);
      } 
    );

  }  */

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  enableUserView(empcode) {
    alert("emp code-->"+empcode);
    this.employeeservice.readProducts().subscribe((userview: User[])=>{
      this.user = userview;
      for(let i=0; i<this.user.length;i++){
        if(empcode==this.user[i].emp_code){
          this.userview = this.user[i];
        }
      }
      //this.dataSource = new MatTableDataSource(this.user);
     // this.dataSource.paginator = this.paginator.toArray()[0];
     // this.dataSource.sort = this.sort.toArray()[0];
    })
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
   saveNewUser(angForm){
    // console.log(angForm.value.emp_name)
     console.log(angForm.value.a_rfid_card)
    //alert("data-->"+this.model.emp_code);
   this.employeeservice.saveUser(angForm.value ).subscribe(()=>{
    }); 
  } 
  employeeEditSave (empedit) {
    this.employeeservice.updateProduct(empedit.value).subscribe((user: User)=>{
  });
}
}
