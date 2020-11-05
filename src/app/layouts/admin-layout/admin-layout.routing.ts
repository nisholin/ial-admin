import { Routes } from '@angular/router';

//canteen_menu
import { MenuManagementComponent } from '../../canteen_menu/components/menu-management/menumanagement.component';
import { SpecialLunchComponent } from '../../canteen_menu/components/speciallunch/speciallunch.component';
import { WastageComponent } from '../../wastage/wastage.component';
import { CanteenTimeComponent } from '../../canteen_menu/components/canteentime/canteentime.component';
import { TodaysMenuComponent } from '../../canteen_menu/components/todays-menu/todays-menu.component';
import { NewMenuComponent } from '../../canteen_menu/components/new-menu/new-menu.component';
import { AddNewMenuComponent } from '../../canteen_menu/components/add-new-menu/add-new-menu.component';
import { NewSpecialLunchComponent } from '../../canteen_menu/components/new-special-lunch/new-special-lunch.component';

//Employee 
import { EmpRegistrationComponent } from '../../epmloyee/components/employee_registration/emp_registration.component';
import { ResetPasswordComponent } from '../../epmloyee/components/reset-password/reset-password.component';
import { GuestComponent } from '../../epmloyee/components/guest/guest.component';
import { ServiceProviderComponent } from '../../epmloyee/components/service-provider/service-provider.component';
import { TraineeComponent } from '../../epmloyee/components/trainee/trainee.component';
import { ContractorComponent } from '../../epmloyee/components/contractor/contractor.component';
import { MeetingRequestComponent } from '../../epmloyee/components/meeting-request/meeting-request.component';

//master
import { NewCategoryComponent } from '../../master/components/new-category/new-category.component';
import { AddNewCompanyComponent } from '../../master/components/add-new-company/add-new-company.component';
import { DepartmentComponent } from '../../master/components/department/department.component';
import { UploadComponent } from '../../master/components/upload/upload.component';

//reports
import { ReportsComponent } from '../../reports/components/reports/reports.component';
import { SummaryReportsComponent } from '../../reports/components/summary-reports/summary-reports.component';
import { CompanyReportsComponent } from '../../reports/components/company-reports/company-reports.component';
import { CatererReportsComponent } from '../../reports/components/caterer-reports/caterer-reports.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'emp_registration',      component: EmpRegistrationComponent },
    { path: 'menumanagement',   component: MenuManagementComponent },
    { path: 'upload',     component: UploadComponent },
    { path: 'speciallunch',          component: SpecialLunchComponent },
    { path: 'wastage',           component: WastageComponent },
    { path: 'canteentime',  component: CanteenTimeComponent },
    { path: 'reset-password',  component: ResetPasswordComponent },
    { path: 'reports',  component: ReportsComponent },
    { path: 'summary-reports',  component: SummaryReportsComponent },
    { path: 'company-reports',  component: CompanyReportsComponent },
    { path: 'caterer-reports',  component: CatererReportsComponent },
    { path: 'todays-menu',  component: TodaysMenuComponent },
    { path: 'new-menu',  component: NewMenuComponent },
    { path: 'add-new-menu',  component: AddNewMenuComponent },
    { path: 'new-special-lunch',  component: NewSpecialLunchComponent },
    { path: 'new-category',  component: NewCategoryComponent },
    { path: 'add-new-company',  component: AddNewCompanyComponent },
    { path: 'department',  component: DepartmentComponent },
    { path: 'guest',  component: GuestComponent },
    { path: 'service-provider',  component: ServiceProviderComponent },
    { path: 'trainee',  component: TraineeComponent },
    { path: 'contractor',  component: ContractorComponent },
    { path: 'meeting-request',  component: MeetingRequestComponent },
];
