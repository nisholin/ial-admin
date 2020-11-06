import { Component, OnInit } from '@angular/core';

//services
import { CanteenTimeService } from "../../services/canteen-time.service";
import { CommonService } from'../../../services/common.service';

//_models
import { CanteenTime } from '../../../_models/canteen/canteentime';

@Component({
  selector: 'app-add-new-menu',
  templateUrl: './add-new-menu.component.html',
  styleUrls: ['./add-new-menu.component.css']
})
export class AddNewMenuComponent implements OnInit {

  model         : any={};
  canteentime		: CanteenTime[];

  constructor(private commonservice: CommonService) { 
    this.commonservice.readCanteentime().subscribe((canteentime: CanteenTime[])=>{
      this.canteentime = canteentime;
    });
  }

  ngOnInit(): void {
  }
  saveNewMenu(addnewmenu) {
    alert("Works Fine");
  }
}
