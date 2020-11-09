import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, Inject } from '@angular/core';
//custom_imports
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';
//services
import { ServiceProviderService } from '../../services/service-provider.service';
//_models
import { ServiceProvider } from '../../../_models/employee/service_provider';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {
  displayedColumns: string[] = ['image', 'empcode', 'empname', 'department','category','rfid','actions'];
  dataSource: MatTableDataSource<any>;
  menuList: any = {};
  model : any={};
  newuser: any;
  tablehide: any;
  userView: any;
  edit: any;
  view: any;
  serviceprovider: ServiceProvider[];
  userview: any;

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  constructor(private Serviceproviderservice: ServiceProviderService) {
    this.Serviceproviderservice.readServiceProvider().subscribe((serviceprovider: ServiceProvider[])=>{
    this.serviceprovider = serviceprovider;
    this.dataSource = new MatTableDataSource(this.serviceprovider);
    this.dataSource.paginator = this.paginator.toArray()[0];
    this.dataSource.sort = this.sort.toArray()[0];
    });  
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
  enableServiceProviderView(empcode) {
    alert("emp code-->"+empcode);
    this.Serviceproviderservice.readServiceProvider().subscribe((serviceprovider: ServiceProvider[])=>{
      this.serviceprovider = serviceprovider;
      for(let i=0; i<this.serviceprovider.length;i++){
        if(empcode==this.serviceprovider[i].emp_code){
          this.userview = this.serviceprovider[i];
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
   /* saveNewUser(ngForm1){
     console.log(ngForm1.value)
    //alert("data-->"+this.model.emp_code);
   this.employeeservice.updateUser(ngForm1.value.emp_code).subscribe(()=>{
      
    }); 
  }  */
}
