import { Component, OnInit, QueryList, ViewChildren, } from '@angular/core';
import { AnyTxtRecord } from 'dns';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
//services
import { CanteenTimeService } from "../../services/canteen-time.service";
import { CommonService } from'../../../services/common.service';
//_models
import { CanteenTime } from '../../../_models/canteen/canteentime';
//loading
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-canteentime',
  templateUrl: './canteentime.component.html',
  styleUrls: ['./canteentime.component.css']
})
export class CanteenTimeComponent implements OnInit {

  model           	: any={};
  displayedColumns	: string[] = ['Category', 'From', 'To', 'Actions'];
  dataSource		: MatTableDataSource<any>;
  view				: any;
  edit				: any;
  canteentime		: CanteenTime[];
  id				: any;
  fieldarray		: Array<any> =[];

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;
  
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  
constructor(
	private commonservice: CommonService,
	private Canteentimeservice: CanteenTimeService,
	private spinner: NgxSpinnerService
	) {
	this.Canteentimeservice.readCanteentime().subscribe((canteentime: CanteenTime[])=>{
		this.canteentime = canteentime;
		for(let i=0; i<this.canteentime.length;i++){
		this.canteentime[i].editable = false;
	}
		console.log(this.canteentime);
		this.dataSource = new MatTableDataSource(this.canteentime);
		this.dataSource.paginator = this.paginator.toArray()[0];
		this.dataSource.sort = this.sort.toArray()[0];
	},
		error => {
		alert('Error -->'+error);
		}
	);  
}

ngOnInit() {
	this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
	this.fieldarray = [];								
}
timeEdit(row: any) {
	row.editable = !row.editable;
}
cancel(row: any) {
	row.editable = false;
}
updateCanteenTime(starttime: any,endtime: any,id: any) {
	console.log(endtime);
	this.fieldarray.push({id: id,start_time: starttime,end_time: endtime});
	console.log(this.fieldarray)
	this.Canteentimeservice.updateCanteenTime(id,this.fieldarray).subscribe(()=>{
		alert("Update Successfully");
		this.ngOnInit();
	},
	error => {
		//alert('Network Error-->'+error);
	});
	this.fieldarray = [];
} 
}
