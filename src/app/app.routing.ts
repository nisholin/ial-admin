import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
//import { EmpRegistrationComponent } from './epmloyee/employee_registration/emp_registration.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
  {
    path: "login",
    component: LoginComponent,
  }, {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
      },
    ]
    /* path: 'admin-layout',
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ] */
  },
  { 
    path: "**", 
    redirectTo: "login" 
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
