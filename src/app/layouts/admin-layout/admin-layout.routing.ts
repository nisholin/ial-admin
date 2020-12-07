import { Routes } from '@angular/router';

//canteen_menu
import { MenuManagementComponent } from '../../canteen_menu/components/menu-management/menumanagement.component';
import { SpecialLunchComponent } from '../../canteen_menu/components/speciallunch/speciallunch.component';
import { WastageComponent } from '../../wastage/wastage.component';
import { CanteenTimeComponent } from '../../canteen_menu/components/canteentime/canteentime.component';
import { TodaysMenuComponent } from '../../canteen_menu/components/todays-menu/todays-menu.component';
import { NewMenuComponent } from '../../canteen_menu/components/new-menu/new-menu.component';
import { WeeklyItemConfigComponent } from '../../canteen_menu/components/weekly-Item-config/weekly-Item-config.component';
import { NewSpecialLunchComponent } from '../../canteen_menu/components/new-special-lunch/new-special-lunch.component';
import { BiriyaniConfigComponent } from '../../canteen_menu/components/biriyani-config/biriyani-config.component';

//Employee 
import { EmpRegistrationComponent } from '../../epmloyee/components/employee_registration/emp_registration.component';
import { ResetPasswordComponent } from '../../epmloyee/components/reset-password/reset-password.component';
import { GuestComponent } from '../../epmloyee/components/guest/guest.component';
import { ServiceProviderComponent } from '../../epmloyee/components/service-provider/service-provider.component';
import { TraineeComponent } from '../../epmloyee/components/trainee/trainee.component';
import { ContractorComponent } from '../../epmloyee/components/contractor/contractor.component';
import { CategoryComponent } from '../../epmloyee/components/category/category.component';
import { DepartmentComponent } from '../../epmloyee/components/department/department.component';

//master
import { EmployeeManualEntryComponent } from '../../manual-entry/components/employee/emp-manual-entry.component';
import { ContractorManualEntryComponent } from '../../manual-entry/components/contractor/cont-manual-entry.component';
import { MeetingRequestComponent } from '../../manual-entry/components/meeting-request/meeting-request.component';

//reports
import { ReportsComponent } from '../../reports/components/reports/reports.component';
import { SummaryReportsComponent } from '../../reports/components/summary-reports/summary-reports.component';
import { CompanyReportsComponent } from '../../reports/components/company-reports/company-reports.component';
import { CatererReportsComponent } from '../../reports/components/caterer-reports/caterer-reports.component';

//more
import { BarcodeComponent } from "../../more/components/barcode/barcode.component";
import { CanteenScreenComponent } from "../../more/components/canteen-screen/canteen-screen.component";
import { HelpDeskComponent } from "../../more/components/help-desk/help-desk.component";

export const AdminLayoutRoutes: Routes = [
    //canteen
    { path: 'canteentime',               component: CanteenTimeComponent },
    { path: 'menuitemmapping',           component: MenuManagementComponent },
    { path: 'speciallunch',              component: SpecialLunchComponent },
    { path: 'menuitem',                  component: NewMenuComponent },
    { path: 'newspecialmenu',            component: NewSpecialLunchComponent },
    { path: 'weeklyitemconfiguration',   component: WeeklyItemConfigComponent },
    { path: 'menuquantitymapping',       component: TodaysMenuComponent },
    { path: 'biriyaniconfiguration',       component: BiriyaniConfigComponent },

    //User
    { path: 'emp_registration',          component: EmpRegistrationComponent },
    { path: 'category',                  component: CategoryComponent },

    { path: 'department',                component: DepartmentComponent },
    { path: 'wastage',                   component: WastageComponent },
    { path: 'reset-password',            component: ResetPasswordComponent },
    { path: 'reports',                   component: ReportsComponent },
    { path: 'summary-reports',           component: SummaryReportsComponent },
    { path: 'company-reports',           component: CompanyReportsComponent },
    { path: 'caterer-reports',           component: CatererReportsComponent },
    { path: 'guest',                     component: GuestComponent },
    { path: 'service-provider',          component: ServiceProviderComponent },
    { path: 'trainee',                   component: TraineeComponent },
    { path: 'contractor',                component: ContractorComponent },
    //Manual Entry
    { path: 'emp-manual-entry',          component: EmployeeManualEntryComponent },
    { path: 'cont-manual-entry',         component: ContractorManualEntryComponent },
    { path: 'meeting-request',           component: MeetingRequestComponent },
    //report
    { path: 'barcode',                   component: BarcodeComponent },
    { path: 'canteen-screen',            component: CanteenScreenComponent },
    { path: 'help-desk',                 component: HelpDeskComponent }
];
