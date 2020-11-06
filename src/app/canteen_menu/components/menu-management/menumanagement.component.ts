import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
//custom imports
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
//services
import { MenuManagementService } from "../../services/menu-management.service";
//_models
import { Menu } from "../../../_models/canteen/menu";

@Component({
  selector: 'app-menumanagement',
  templateUrl: './menumanagement.component.html',
  styleUrls: ['./menumanagement.component.css']
})
export class MenuManagementComponent implements OnInit {

  displayedColumns1  : string[] = ['id', 'name', 'progress', 'color'];
  dataSource1        : MatTableDataSource<any>;
  displayedColumns2  : string[] = ['id', 'name', 'progress', 'color'];
  dataSource2        : MatTableDataSource<any>;
  model             : any;
  menu              : Menu[];
  menuList          : any;
  menusView         = false;
  employeeMenuList  : any;

  dialogConfig      = new MatDialogConfig();
  isDtInitialized   : boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  
  constructor(private menumanagementservice: MenuManagementService) {
    this.menumanagementservice.readMenu().subscribe((menu: Menu[])=>{
      this.menuList = Menu;
      //console.log(this.categoryList);
    });
    this.menumanagementservice.readEmployeeMenu().subscribe((menu:Menu[]) =>{
      this.employeeMenuList = menu;
      this.dataSource1 = new MatTableDataSource(this.employeeMenuList);
      this.dataSource1.paginator = this.paginator.toArray()[0];
      this.dataSource1.sort = this.sort.toArray()[0];
    },
      error => {
        alert('Network Error-->'+error);
      }
    );
   }

  ngOnInit() {
    this.menusView=false;
  }
  menusShow(value){
    alert("data--->"+value);
    this.menusView=true;
  }
}
