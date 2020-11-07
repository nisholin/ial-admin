import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
//custom imports
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//services
import { MenuManagementService } from "../../services/menu-management.service";
import { CommonService } from'../../../services/common.service';
//_models
import { Menu } from "../../../_models/canteen/menu";
import { CanteenTime } from '../../../_models/canteen/canteentime';

@Component({
  selector: 'app-menumanagement',
  templateUrl: './menumanagement.component.html',
  styleUrls: ['./menumanagement.component.css']
})
export class MenuManagementComponent implements OnInit {

  model                       : any={};
  displayedColumns1           : string[] = ['menuname', 'itemname'];
  dataSource1                 : MatTableDataSource<any>;
  displayedColumns2           : string[] = ['menuname', 'itemname'];
  dataSource2                 : MatTableDataSource<any>;
  menu                        : Menu[];
  menuList                    : any;
  menusView                   = false;
  employeeMenuList            : any;
  contractorMenuList          : any;
  menuview                    : any;
  canteentime                 : any;
  fieldarray		              : Array<any> =[];
  changedEmployeeMenuList     : any;
  changescontractorMenuList   : any;
  prodArr                     : Array<any> =[];
  isCheckedArr                : Array<any> =[];
  isShowEditDelete            = [];

  dialogConfig      = new MatDialogConfig();
  isDtInitialized   : boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  
  constructor(
    private menumanagementservice: MenuManagementService,
    config: NgbModalConfig, private modalService: NgbModal,
    private commonservice: CommonService
    ) {
    /* this.menumanagementservice.readMenu().subscribe((menu: Menu[])=>{
      this.menuList = Menu;
      //console.log(this.categoryList);
    }); */
    this.menumanagementservice.readEmployeeMenu().subscribe((menu:Menu[]) =>{
      this.employeeMenuList = menu;
      this.dataSource1 = new MatTableDataSource(this.employeeMenuList);
      this.dataSource1.paginator = this.paginator.toArray()[0];
      this.dataSource1.sort = this.sort.toArray()[0];
    },
      /* error => {
        alert('Network Error-->'+error);
      } */
    );
    this.menumanagementservice.readContractorMenu().subscribe((menu:Menu[]) =>{
      this.contractorMenuList = menu;
      console.log(this.contractorMenuList);
      this.dataSource2 = new MatTableDataSource(this.contractorMenuList);
      this.dataSource2.paginator = this.paginator.toArray()[0];
      this.dataSource2.sort = this.sort.toArray()[0];
    },
      /* error => {
        alert('Network Error-->'+error);
      } */
    );
    this.commonservice.readCanteentime().subscribe((canteentime: CanteenTime[])=>{
      this.canteentime = canteentime;
    });
   }

  ngOnInit() {
    this.menusView=false;
    this.fieldarray = [];
  }
  menusShow(menuid){
    alert(menuid.value);
    //this.fieldarray.push({id: menuid.value});
    this.menumanagementservice.readEmployeeMenuList(menuid.value).subscribe((menu:Menu[]) =>{
      this.changedEmployeeMenuList = menu;
      console.log(this.changedEmployeeMenuList)
    }) 
    this.menusView=true;
    this.fieldarray = [];
  }
  contractorMenusShow(contmenunid){
    alert(contmenunid.value);
    this.menumanagementservice.contractorMenusShow(contmenunid.value).subscribe((menu:Menu[]) =>{
      this.changescontractorMenuList = menu;
    })
    this.menusView=true;
  }
  empMenuEditOpen(edit) {
    const modalRef = this.modalService.open(edit, { windowClass: 'modal-class'});
    let data: any;
    data = {
      item: edit
    };
    /* modalRef.componentInstance.fromParent = data;
    setTimeout(() => {
      modalRef.close()
    }, 3000); */
  }
  contMenuEditOpen(contractedit) {
    const modalRef = this.modalService.open(contractedit, { windowClass: 'modal-class'});
    let data: any;
    data = {
      item: contractedit
    };
    /* modalRef.componentInstance.fromParent = data;
    setTimeout(() => {
      modalRef.close()
    }, 3000); */
  }
  empMenuUpdate(empeditupdateForm) {
    console.log(empeditupdateForm.value);
    this.menumanagementservice.updateEmpMenu(empeditupdateForm.value).subscribe(()=>{
    },
    error => {
      alert('Network Error-->'+error);
    });
  }
  contMenuUpdate(conteditupdateForm) {
    console.log(conteditupdateForm.value);
    this.menumanagementservice.updateContMenu(conteditupdateForm.value).subscribe(()=>{
    },
    error => {
      alert('Network Error-->'+error);
    });
  }
  rowSelected(index: number, item: any, isChecked: boolean) {
    if (isChecked) {
      item.indexVal = index;
      this.prodArr.push(item);
      
      this.isCheckedArr.push({ checked: true, indexVal: index });
      this.isShowEditDelete[index] = false;
    } else {
      this.removeItem(this.isCheckedArr, index, "checked");
      this.removeItem(this.prodArr, index, "product");
    }console.log(this.prodArr);

  }
  removeItem(isCheckedArr: any, index: number, type: string) {
    // console.log('isCheckedArr', isCheckedArr)
    // console.log('index12', index)
    isCheckedArr.forEach((item, indexCheck) => {
      // console.log('indexVal', item.indexVal)
      // console.log('index', index)
      if (item.indexVal === index) {
        isCheckedArr.splice(indexCheck, 1);
      }
    });

    if (type === "checked") {
      this.isCheckedArr = isCheckedArr;
    } else if (type === "product") {
      this.prodArr = isCheckedArr;
    }
  }
}
