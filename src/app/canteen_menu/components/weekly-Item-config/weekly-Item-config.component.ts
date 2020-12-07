import { Component, OnInit } from '@angular/core';
//services
import { CanteenTimeService } from "../../services/canteen-time.service";
import { CommonService } from'../../../services/common.service';
import { WeeklyItemConfigService } from "../../services/weekly-item-config.service";
//_models
import { CanteenTime } from '../../../_models/canteen/canteentime';
//loading
import { NgxSpinnerService } from "ngx-spinner";
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
  weeklyItemList  : any;

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
  saveNewMenu(addnewmenu) {
    alert("Works Fine");
  }
  itemEdit(id: any) {
    alert(id);
    this.weeklyitemconfig.readWeeklyItemDetails(id).subscribe((data)=>{
      this.weeklyItemList = data;
      console.log(this.weeklyItemList);
    },error => {
      //alert('Network Error-->'+error);
    });
    this.weeklymenuedit = true;
    this.tabShow        = false;
   }
}
