import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speciallunch',
  templateUrl: './speciallunch.component.html',
  styleUrls: ['./speciallunch.component.css']
})
export class SpecialLunchComponent implements OnInit {
  specialmenu: any = {};
  constructor() { 
    //const specialMenu = require("src/app/json_files/");
    //this.specialmenu=specialMenu; 
  }

  ngOnInit() {
  }

}
