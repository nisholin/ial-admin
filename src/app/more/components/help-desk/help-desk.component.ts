import { Component, OnInit } from '@angular/core';
//custom
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    window.location.href="https://bluebase.freshdesk.com/support/login";
  }

}
