import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, Inject } from '@angular/core';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';
//services
import { ContractorService } from '../../services/contractor.service';
//_models
import { Contract } from '../../../_models/employee/contract';
//loading
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {
  displayedColumns: string[] = ['image', 'empcode', 'empname', 'department','category','rfid','actions'];
  dataSource: MatTableDataSource<any>;
  menuList: any = {};
  model : any={};
  newuser: any;
  tablehide: any;
  userView: any;
  edit: any;
  view: any;
  contract: Contract[];
  userview: any;

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  constructor(
    private contractorservice: ContractorService,
    private spinner: NgxSpinnerService
    ) { 
    this.contractorservice.readContract().subscribe((contract: Contract[])=>{
    this.contract = contract;
    this.dataSource = new MatTableDataSource(this.contract);
    this.dataSource.paginator = this.paginator.toArray()[0];
    this.dataSource.sort = this.sort.toArray()[0];
    })  
  }

  ngOnInit(): void {
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
  enableContractorView(empcode) {
    alert("emp code-->"+empcode);
    this.contractorservice.readContract().subscribe((contract: Contract[])=>{
    this.contract = contract;
    for(let i=0; i<this.contract.length;i++){
      if(empcode==this.contract[i].emp_code){
        this.userview = this.contract[i];
        //this.userview.emp_code = this.user[i].emp_code;
      } }});
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
   /* saveNewUser(ngForm1){
     console.log(ngForm1.value)
    //alert("data-->"+this.model.emp_code);
   this.employeeservice.updateUser(ngForm1.value.emp_code).subscribe(()=>{
      
    }); 
  }  */
}
