import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { MenuManagementComponent } from '../../canteen_menu/menu-management/menumanagement.component';
import { SpecialLunchComponent } from '../../canteen_menu/speciallunch/speciallunch.component';
import { WastageComponent } from '../../wastage/wastage.component';
import { CanteenTimeComponent } from '../../canteen_menu/canteentime/canteentime.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ReportsComponent } from '../../reports/reports/reports.component';
import { SummaryReportsComponent } from '../../reports/summary-reports/summary-reports.component';
import { CompanyReportsComponent } from '../../reports/company-reports/company-reports.component';
import { CatererReportsComponent } from '../../reports/caterer-reports/caterer-reports.component';

import { TodaysMenuComponent } from '../../canteen_menu/todays-menu/todays-menu.component';
import { NewMenuComponent } from '../../canteen_menu/new-menu/new-menu.component';
import { AddNewMenuComponent } from '../../canteen_menu/add-new-menu/add-new-menu.component';
import { NewSpecialLunchComponent } from '../../canteen_menu/new-special-lunch/new-special-lunch.component';

//master
import { NewCategoryComponent } from '../../master/new-category/new-category.component';
import { AddNewCompanyComponent } from '../../master/add-new-company/add-new-company.component';
import { DepartmentComponent } from '../../master/department/department.component';
import { UploadComponent } from '../../master/upload/upload.component';

//Employee
import { EmpRegistrationComponent } from '../../epmloyee/employee_registration/emp_registration.component';
import { ResetPasswordComponent } from '../../epmloyee/reset-password/reset-password.component';
import { GuestComponent } from '../../epmloyee/guest/guest.component';
import { ServiceProviderComponent } from '../../epmloyee/service-provider/service-provider.component';
import { TraineeComponent } from '../../epmloyee/trainee/trainee.component';
import { ContractorComponent } from '../../epmloyee/contractor/contractor.component';
import { MeetingRequestComponent } from '../../epmloyee/meeting-request/meeting-request.component';

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



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
  ],
  declarations: [
    EmpRegistrationComponent,
    MenuManagementComponent,
    UploadComponent,
    SpecialLunchComponent,
    WastageComponent,
    CanteenTimeComponent,
    ResetPasswordComponent,
    ReportsComponent,
    SummaryReportsComponent,
    CompanyReportsComponent,
    CatererReportsComponent,
    TodaysMenuComponent,
    NewMenuComponent,
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
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule
  ]
})

export class AdminLayoutModule {}
