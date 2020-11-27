import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialogConfig } from "@angular/material/dialog";
//TABLE
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
//SERVICES
import { MeetingRequestService } from "../../services/meeting-request.service";
import { GuestService } from '../../../epmloyee/services/guest.service';
import { EmployeeManualEntryService } from "../../services/employee-manual-entry.service";
//_MODELS
import { MeetingRequest } from "../../../_models/manual-entry/meeting-request";
import { Department } from '../../../_models/employee/department';
import { Menu } from "../../../_models/canteen/menu";
import { EmployeeManualEntry } from "../../../_models/manual-entry/employee-manual-entry";

@Component({
  selector: 'app-meeting-request',
  templateUrl: './meeting-request.component.html',
  styleUrls: ['./meeting-request.component.css']
})
export class MeetingRequestComponent implements OnInit {

  model                     : any = {};
  displayedColumns          : string[] = ['no', 'code','date','status','actions'];
  dataSource                : MatTableDataSource<any>;

  dialogConfig              = new MatDialogConfig();
  isDtInitialized           : boolean = false;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  tablehide                 : any;
  meetingrequest            : MeetingRequest [];
  meetingrequestlist        : any;
  newMeeting                : any;
  department                : Department[];
  departmentList            : any;
  meetinglistview           : any;
  meetingView               : any;
  view                      : any;
  edit                      : any;
  private tableArray        : Array<any> = [];
  private newAttribute      : any = {};
  menu                      : Menu[];
  menuList                  : any;
  private edittablearray    : Array<any> = [];
  private newAttribute2     : any = {};
  empManualList             : any;
  employeemanualentry       : EmployeeManualEntry[];
  private meetingReqArr     : Array<any> = [];


  constructor( 
    private meetingrequestservice: MeetingRequestService,
    private guestservice: GuestService,
    private employeemanualservice: EmployeeManualEntryService,
    ) {
    this.meetingrequestservice.readMeetingRequest().subscribe((meetingrequest: MeetingRequest[])=>{
      this.meetingrequestlist = meetingrequest;
      console.log(this.meetingrequestlist);
      this.dataSource = new MatTableDataSource(this.meetingrequestlist);
      this.dataSource.paginator = this.paginator.toArray()[0];
      this.dataSource.sort = this.sort.toArray()[0];
    },
    error => {
      //alert('Network Error-->'+error);
    });
    this.guestservice.readDepartment().subscribe((department: Department[])=>{
      this.departmentList = department;
      console.log(this.departmentList);
    },
    error => {
      //alert('Network Error-->'+error);
    });
   }

  ngOnInit() {
    this.tablehide    = true;
    this.newMeeting   = false;
    this.meetingView  = false;
    this.view         = false;
    this.edit         = false;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  newMeetingRequest() {
    this.newMeeting   = true;
    this.tablehide    = false;
    this.meetingrequestservice.readItems().subscribe((menu: Menu[])=>{
      this.menuList = menu;
      console.log(this.menuList);
    },
    error => {
      //alert('Network Error-->'+error);
    });
  }
  close() {
    this.tablehide    = true;
    this.newMeeting   = false;
    this.meetingView  = false;
    this.view         = false;
    this.edit         = false;
  }
  meetingDetailsView(id: any) {
    this.meetingrequestservice.readMeetingRequest().subscribe((meetingrequest: MeetingRequest[])=>{
      this.meetingrequestlist = meetingrequest;
      for(let i=0;i<this.meetingrequestlist.length;i++){
        if( id == this.meetingrequestlist[i].id){
          this.meetinglistview = this.meetingrequestlist[i];
          console.log(this.meetinglistview);
        }
      }
    },
    error => {
      //alert('Network Error-->'+error);
    });
    this.meetingView  = true;
    this.view         = true;
    //this.edit         = false;
    this.tablehide    = false;
    this.newMeeting   = false;
  }
  meetingEditOpen() {
    this.meetingrequestservice.readItems().subscribe((menu: Menu[])=>{
      this.menuList = menu;
      console.log(this.menuList);
    },
    error => {
      //alert('Network Error-->'+error);
    });
    this.edit         = true;
    this.view         = false;
  }
  editClose() {
    this.view         = true;
    this.edit         = false;
  }
  //Add Row Method
  addFieldValue() {
    this.tableArray.push(this.newAttribute)
    this.newAttribute = {};
    console.log(this.tableArray);
  }

  deleteFieldValue(index) {
      this.tableArray.splice(index, 1);
  }
  
  editFieldValue() {
    this.edittablearray.push(this.newAttribute2)
    this.newAttribute2 = {};
    console.log(this.edittablearray);
  }

  editFieldValuedelete(index) {
      this.edittablearray.splice(index, 1);
  }
  saveMeetingRequest(addMeetingDetails: any) {
    this.meetingReqArr = this.tableArray.concat(addMeetingDetails.value);
    console.log(this.meetingReqArr);
    this.meetingrequestservice.saveMeetingRequest(this.meetingReqArr).subscribe((meetingrequest:MeetingRequest[]) =>{
      alert("Saved Successfilly");
    },
    error => {
      //alert('Network Error-->'+error);
    }); 
  }
  getEmpDetails(empcode) {
    //alert("test"+empcode.value);
    this.employeemanualservice.getEmpManualEntry(empcode.value).subscribe((employeemanualentry:EmployeeManualEntry[]) =>{
      this.empManualList        = employeemanualentry;
      this.model.emp_name       = this.empManualList[0].emp_name;
      this.model.category_name  = this.empManualList[0].category_name;
      this.model.category_id    = this.empManualList[0].category_id;
      //alert(this.empManualList[0].emp_name);
      },
      error => {
        //alert('Network Error-->'+error);
      });
  }
  meetingEditSave(meetingEdit: any) {
    console.log(meetingEdit.value);
    this.meetingrequestservice.updateMeetingRequst(meetingEdit.value).subscribe((meetingrequest: MeetingRequest[])=>{
      alert("Updated Successfully");
    },
    error => {
      //alert('Network Error-->'+error);
    });
  }
}
