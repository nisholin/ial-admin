import { Component, OnInit } from '@angular/core';
import { AnyTxtRecord } from 'dns';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { CommonService } from'../../services/common.service';
import { CanteenTime } from '../../_models/canteentime';

@Component({
  selector: 'app-canteentime',
  templateUrl: './canteentime.component.html',
  styleUrls: ['./canteentime.component.css']
})
export class CanteenTimeComponent implements OnInit {
  view: any;
  edit: any;
  canteentime: CanteenTime[];

  constructor(private commonservice: CommonService) {
    this.commonservice.readCanteentime().subscribe((canteentime: CanteenTime[])=>{
      this.canteentime = canteentime;
      console.log(this.canteentime);
    }) }
 
  ngOnInit() {
    this.view=true;
    this.edit=false;
  }
  timeEdit() {
    this.edit=true;
    this.view=false;
  }
  editSave() {
    this.edit=false;
    this.view=true;
  }
}
