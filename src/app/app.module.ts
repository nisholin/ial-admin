import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ToastrModule } from 'ngx-toastr';

//custom imports
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";

//import {MatSelectModule} from '@angular/material/select';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule  } from "@angular/material/input";
//import { MatCardModule } from '@angular/material/card';
//import { MatButtonModule} from '@angular/material/button';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { MatListModule } from '@angular/material/list';  
//import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatNativeDateModule} from '@angular/material/core';
//import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatIconModule } from '@angular/material/icon';


//components
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule,
   // ToastrModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    //ShowHidePasswordModule,
    //MatSelectModule,
    //MatFormFieldModule,
    //MatInputModule,
    //MatCardModule,
    //MatButtonModule,
    //BsDatepickerModule,
    //MatListModule,
    //MatSidenavModule,
    //MatDatepickerModule,
    //MatNativeDateModule,
    //MatToolbarModule,
    //MatIconModule,
    NgxSpinnerModule
  ],
  exports: [
    //MatSidenavModule,
    //MatListModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
