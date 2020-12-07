import { Component, OnInit } from '@angular/core';

//services
import { BarcodeService } from '../../services/barcode.service';
//_models
import { User } from '../../../_models/user';
//loading
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  model             : any = {};
  barcodeShow       : boolean;
  user              : User[];
  userList          : any;

  constructor(
    private barcodeservices: BarcodeService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    this.barcodeShow  = false;
  }
  barcodesearch(barcodeform: any) {
    console.log(barcodeform.value.emp_code);
    this.barcodeservices.readEmployee(barcodeform.value.emp_code).subscribe((user:User[]) =>{
      this.userList = user;
    },
      error => {
        alert('Network Error-->'+error);
        this.spinner.hide();
      });
    this.barcodeShow  = true;
  }
  print() {
    let printContents, popupWin;
    printContents = document.getElementById('component1').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>IAL</title>
          <style>
          //........Customized style.......
          .bar-img {
            border-radius: 0px;
            margin-bottom: 5px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 10%;
        }
        .w-18 {
          text-align: center;
        }
        .h3 {
            margin-bottom: -13px;
            color: blue;
        }
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
