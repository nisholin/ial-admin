import { Component, OnInit,ViewChildren, ViewChild, QueryList, ElementRef, Inject } from '@angular/core';
//custom imports
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';
//services
import { TraineeService } from '../../services/trainee.service';
//_models
import { Trainee } from "../../../_models/employee/trainee";
//loading
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {
  displayedColumns: string[] = ['image', 'empcode', 'empname', 'department','category','rfid','actions'];
  dataSource: MatTableDataSource<any>;
  menuList: any = {};
  model : any={};
  newuser: any;
  tablehide: any;
  userView: any;
  edit: any;
  view: any;
  trainee: Trainee[];
  userview: any;

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  constructor(
    private traineeservice: TraineeService,
    private spinner: NgxSpinnerService
    ) { 
    this.traineeservice.readTraineeDetails().subscribe((trainee: Trainee[])=>{
    this.trainee = trainee;
    this.dataSource = new MatTableDataSource(this.trainee);
    this.dataSource.paginator = this.paginator.toArray()[0];
    this.dataSource.sort = this.sort.toArray()[0];
  })  
  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
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
  enableTraineeView(empcode) {
    alert("emp code-->"+empcode);
    this.traineeservice.readTraineeDetails().subscribe((trainee: Trainee[])=>{
      this.trainee = trainee;
      for(let i=0; i<this.trainee.length;i++){
        if(empcode==this.trainee[i].emp_code){
          this.userview = this.trainee[i];
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
  saveTrainee(addTraineeForm){
    alert("test");
     console.log(addTraineeForm.value)
    //alert("data-->"+this.model.emp_code);
  /*  this.employeeservice.updateUser(ngForm1.value.emp_code).subscribe(()=>{
      
    });  */
  }  
}
