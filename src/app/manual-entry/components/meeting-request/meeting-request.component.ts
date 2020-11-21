import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialogConfig } from "@angular/material/dialog";
//TABLE
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
//SERVICES
import { MeetingRequestService } from "../../services/meeting-request.service";
//_MODELS
import { MeetingRequest } from "../../../_models/manual-entry/meeting-request";

@Component({
  selector: 'app-meeting-request',
  templateUrl: './meeting-request.component.html',
  styleUrls: ['./meeting-request.component.css']
})
export class MeetingRequestComponent implements OnInit {

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

  constructor( private meetingrequestservice: MeetingRequestService) {
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
   }

  ngOnInit() {
    this.tablehide  = true;
    this.newMeeting = false;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  newMeetingRequest() {
    this.newMeeting = true;
    this.tablehide  = false;
  }
}
