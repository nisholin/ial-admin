import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

//canteem_menus
import { MenuManagementComponent } from '../../canteen_menu/components/menu-management/menumanagement.component';
import { SpecialLunchComponent } from '../../canteen_menu/components/speciallunch/speciallunch.component';
import { WastageComponent } from '../../wastage/wastage.component';
import { CanteenTimeComponent } from '../../canteen_menu/components/canteentime/canteentime.component';
import { TodaysMenuComponent } from '../../canteen_menu/components/todays-menu/todays-menu.component';
import { NewMenuComponent } from '../../canteen_menu/components/new-menu/new-menu.component';
import { AddNewMenuComponent } from '../../canteen_menu/components/add-new-menu/add-new-menu.component';
import { NewSpecialLunchComponent } from '../../canteen_menu/components/new-special-lunch/new-special-lunch.component';
import { BiriyaniConfigComponent } from '../../canteen_menu/components/biriyani-config/biriyani-config.component';

//Employees
import { EmpRegistrationComponent } from '../../epmloyee/components/employee_registration/emp_registration.component';
import { ResetPasswordComponent } from '../../epmloyee/components/reset-password/reset-password.component';
import { GuestComponent } from '../../epmloyee/components/guest/guest.component';
import { ServiceProviderComponent } from '../../epmloyee/components/service-provider/service-provider.component';
import { TraineeComponent } from '../../epmloyee/components/trainee/trainee.component';
import { ContractorComponent } from '../../epmloyee/components/contractor/contractor.component';
import { MeetingRequestComponent } from '../../epmloyee/components/meeting-request/meeting-request.component';
import { DepartmentComponent } from '../../epmloyee/components/department/department.component';

//masters
import { NewCategoryComponent } from '../../manual-entry/components/employee/new-category.component';
import { AddNewCompanyComponent } from '../../manual-entry/components/contractor/add-new-company.component';
//import { DepartmentComponent } from '../../master/components/department/department.component';
import { UploadComponent } from '../../manual-entry/components/meeting-request/upload.component';

//reports
import { ReportsComponent } from '../../reports/components/reports/reports.component';
import { SummaryReportsComponent } from '../../reports/components/summary-reports/summary-reports.component';
import { CompanyReportsComponent } from '../../reports/components/company-reports/company-reports.component';
import { CatererReportsComponent } from '../../reports/components/caterer-reports/caterer-reports.component';

//custom imports
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    //MatSort,
    //MatTableDataSource
    MatFormFieldModule,
    MatSelectModule,
    ShowHidePasswordModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NgxSpinnerModule
  ],
  declarations: [
    //canteen
    CanteenTimeComponent,
    MenuManagementComponent,
    SpecialLunchComponent,
    BiriyaniConfigComponent,
    NewMenuComponent,
    TodaysMenuComponent,

    EmpRegistrationComponent,
    UploadComponent,
    WastageComponent,
    ResetPasswordComponent,
    ReportsComponent,
    SummaryReportsComponent,
    CompanyReportsComponent,
    CatererReportsComponent,
    AddNewMenuComponent,
    NewSpecialLunchComponent,
    NewCategoryComponent,
    AddNewCompanyComponent,
    DepartmentComponent,
    GuestComponent,
    ServiceProviderComponent,
    TraineeComponent,
    ContractorComponent,
    MeetingRequestComponent,
  ],
  exports: [
    MatFormFieldModule ,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule
  ]
})

export class AdminLayoutModule {}
