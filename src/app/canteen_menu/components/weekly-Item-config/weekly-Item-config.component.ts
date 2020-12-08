import { Component, OnInit } from '@angular/core';
//services
import { CanteenTimeService } from "../../services/canteen-time.service";
import { CommonService } from'../../../services/common.service';
import { WeeklyItemConfigService } from "../../services/weekly-item-config.service";
//_models
import { CanteenTime } from '../../../_models/canteen/canteentime';
import { WeeklyMenu } from "../../../_models/canteen/weeklymenu";
//loading
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup } from '@angular/forms';
//custom

@Component({
  selector: 'app-weekly-Item-config',
  templateUrl: './weekly-Item-config.component.html',
  styleUrls: ['./weekly-Item-config.component.css']
})
export class WeeklyItemConfigComponent implements OnInit {

  model           : any = {};
  canteentime		  : CanteenTime[];
  weeklymenuedit  : boolean;
  tabShow         : boolean;
  weeklymenu      : WeeklyMenu[]
  weeklyItemList  : any = {};

  constructor(
    private commonservice     : CommonService,
    private weeklyitemconfig  : WeeklyItemConfigService,
    private spinner           : NgxSpinnerService
    ) { 
    this.commonservice.readCanteentime().subscribe((canteentime: CanteenTime[])=>{
      this.canteentime = canteentime;
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.tabShow        = true;
    this.weeklymenuedit = false;
  }
  saveNewMenu(addnewmenu: any) {
    alert("Works Fine");
  }
  itemEdit(id: any) {
    //alert(id);
    this.weeklyitemconfig.readWeeklyItemDetails(id).subscribe((weeklymenu:WeeklyMenu[])=>{
      this.weeklymenu = weeklymenu;
      console.log(this.weeklymenu);
    },error => {
      //alert('Network Error-->'+error);
    });
    this.weeklymenuedit = true;
    this.tabShow        = false;
   }
   weeklyMenuEditSave() {
    //console.log(weeklyMenuEdit.value);
    /* this.weeklyitemconfig.saveweeklyMenuEditSave(weeklyMenuEdit.value).subscribe(()=>{
      this.ngOnInit();
    },
    error => {
     // alert('Network Error-->'+error);
    }); */
   }
}
