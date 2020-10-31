import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder 
  ) { }
  authForm: FormGroup;
  isSubmitted  =  false;
  ngOnInit(): void {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.authForm.controls; }
 // save() {
    //this.router.navigate(['/admin-layout']);
   // this.router.navigate(['/']);
 // }
 save(userName,passWord){
 // this.isSubmitted = true;
 // if(this.authForm.invalid){
    
 //  return;
 // }
 
 //this.authService.signIn(this.authForm.value);
 //this.router.navigateByUrl('/layouts');
 if(userName=="admin" &&passWord=="123"){
  this.router.navigateByUrl('/');
 }else if(userName=="" &&passWord==""){
   alert("Enter Username and Password")
 }
 else{
  alert("username and password incorrect")
 }
}


}
