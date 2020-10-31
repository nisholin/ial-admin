import { Component, OnInit, HostListener} from '@angular/core';
import { Location } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { CommonService } from "../../services/common.service";
import { MatListModule } from '@angular/material/list';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    childern: any;
    submenu: boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '/', title: 'Canteen Menu',  icon: 'design_app', class: '',
  childern: [
    {
      id: "todaysmenu",
      label: "Todays Menu",
      path: "/todays-menu",
      icon:'education_atom'
    },
    {
      id: "canteentime",
      label: "Canteen Time",
      path: "/canteentime",
    },{
      id: "itemmenumanagement",
      label: "Menu Management",
      path: "/menumanagement",
    },{
      id: "newmenu",
      label: "New Menu",
      path: "/new-menu",
    },{
      id: "addnewmenu",
      label: "Add New Menu",
      path: "/add-new-menu",
    },{
      id: "speciallunch",
      label: "Special Lunch",
      path: "/speciallunch",
    },{
      id: "newspeciallunch",
      label: "New Special Lunch",
      path: "/new-special-lunch",
    },
  ], submenu: true },

  { path: '/', title: 'Employee',  icon:'education_atom', class: 'icons',
  childern: [
    {
      id: "employeeregistration",
      label: "Registration",
      path: "/emp_registration",
    },
    {
      id: "guest",
      label: "Guest",
      path: "/guest",
    },
    {
      id: "service-provider",
      label: "Service Provider",
      path: "/service-provider",
    },
    {
      id: "trainee",
      label: "Trainee",
      path: "/trainee",
    },
    {
      id: "contractor",
      label: "Contractor",
      path: "/contractor",
    },
    {
      id: "meeting-request",
      label: "Meeting Request",
      path: "/meeting-request",
    },
    {
      id: "resetpassword",
      label: "Reset Passsword",
      path: "/reset-password",
    }
  ], submenu: true },

  /* { path: '/wastage', title: 'Wastage',  icon:'location_map-big', class: '',childern: [], submenu: false }, */
  { path: '/', title: 'Master',  icon:'ui-1_bell-53', class: '',
  childern: [
    {
      id: "newcategory",
      label: "New Category",
      path: "/new-category",
    },
    {
      id: "addnewcompany",
      label: "Add New Company",
      path: "/add-new-company",
    },
    {
      id: "department",
      label: "Department",
      path: "/department",
    },
    {
      id: "upload",
      label: "Upload",
      path: "/upload",
    },
  ], submenu: true },

  { path: '/', title: 'Reports',  icon:'text_caps-small', class: '',
    childern: [
      {
        id: "reports",
        label: "Reports",
        path: "/reports",
      },
      {
        id: "summaryreports",
        label: "Summary Reports",
        path: "/summary-reports",
      },
      {
        id: "companyreports",
        label: "Company Reports",
        path: "/company-reports",
      },
      {
        id: "catererreports",
        label: "Caterer Reports",
        path: "/caterer-reports",
      }
  ],
  submenu: true},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  showMenu = false;
  currentPath: string;
  assignPath: string;
  showChildNum:number = NaN;
  isExpanded: boolean;

  constructor(
    private commonservice:CommonService,
      location: Location, router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = location.path();
        const splitPath = this.currentPath.split('/');
        this.assignPath = splitPath[0]+'/'+splitPath[1];
       }
    });
  }

  ngOnInit() {
    this.commonservice.toggleSideNavi(true);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.commonservice.viewSideNaviSource.subscribe(value => {
      this.isExpanded = value;

      this.menuItems.map((item, index) => {
        if(item.path == this.assignPath) {
          this.shuffleOverrideLinks(index);
        }
      })
    });
  }

  optionListToggle(value) {
    this.showMenu = value;
  }

  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  shuffleChildLinks(num){
    this.showChildNum = this.showChildNum !== num ? this.showChildNum = num : -1;
  }

  shuffleOverrideLinks(num) {
    setTimeout(() => {
      this.showChildNum = num;
    })
  }

}
