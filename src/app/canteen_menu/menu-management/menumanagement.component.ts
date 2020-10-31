import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menumanagement',
  templateUrl: './menumanagement.component.html',
  styleUrls: ['./menumanagement.component.css']
})
export class MenuManagementComponent implements OnInit {

  menusView=false;
  constructor() { }

  ngOnInit() {
    this.menusView=false;
  }
  menusShow(value){
    alert("data--->"+value);
    this.menusView=true;
  }
}
