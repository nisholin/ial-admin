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

  { path: '/', title: 'User',  icon:'education_atom', class: 'icons',
  childern: [
    {
      id: "employeeregistration",
      label: "Employee",
      path: "/emp_registration",
    },
    {
      id: "guest",
      label: "Guest",
      path: "/guest",
    },
    {
      id: "contractor",
      label: "Contractor",
      path: "/contractor",
    },
    {
      id: "contractorguest",
      label: "Contractor Guest",
      path: "/service-provider",
    },
    {
      id: "trainee",
      label: "Trainee",
      path: "/trainee",
    },
    {
      id: "meeting-request",
      label: "Category",
      path: "/meeting-request",
    },
    {
      id: "company",
      label: "Company",
      path: "/reset-password",
    },
    {
      id: "department",
      label: "Department",
      path: "/department",
    },
  ], submenu: true },

  { path: '/', title: 'Canteen Menu',  icon: 'design_app', class: '',
  childern: [
    {
      id: "canteentime",
      label: "Canteen Time",
      path: "/canteentime",
    },
    {
      id: "menuitemmapping",
      label: "Menu Item Mapping",
      path: "/menuitemmapping",
    },
    {
      id: "speciallunch",
      label: "Special lunch",
      path: "/speciallunch",
      icon: 'speciallunch',
    },
    {
      id: "menuitem",
      label: "Menu Ttem",
      path: "/menuitem",
    },
    {
      id: "newspecialmenu",
      label: "New Special Menu",
      path: "/newspecialmenu",
    },
    {
      id: "weeklyitemconfiguration",
      label: "Item Configuration",
      path: "/weeklyitemconfiguration",
    },
    {
      id: "menuquantitymapping",
      label: "Menu Mapping",
      path: "/menuquantitymapping",
    },
    {
      id: "biriyaniconfiguration",
      label: "Biriyani Config",
      path: "/biriyaniconfiguration",
    }
  ], submenu: true },


  /* { path: '/wastage', title: 'Wastage',  icon:'location_map-big', class: '',childern: [], submenu: false }, */
  { path: '/', title: 'Manual Entry',  icon:'ui-1_bell-53', class: '',
  childern: [
    {
      id: "manualentry",
      label: "Employee",
      path: "/emp-manual-entry",
    },
    {
      id: "addnewcompany",
      label: "Contractor",
      path: "/cont-manual-entry",
    },
    {
      id: "meetingrequest",
      label: "Meeting Request",
      path: "/meeting-request",
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
