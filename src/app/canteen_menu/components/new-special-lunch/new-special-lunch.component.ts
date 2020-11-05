import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-special-lunch',
  templateUrl: './new-special-lunch.component.html',
  styleUrls: ['./new-special-lunch.component.css']
})
export class NewSpecialLunchComponent implements OnInit {

  edit:any;
  constructor() { }

  ngOnInit(): void {
    this.edit=false;
  }

}
