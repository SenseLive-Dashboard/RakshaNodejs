import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EmpregService } from '../empreg.service';
import {Employee} from '../employereg';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  submitted = false;

  EmpregisterForm = new FormGroup({
    id: new FormControl(''), 
    empname: new FormControl('', Validators.required),
    empemail: new FormControl('',[Validators.required, Validators.email]),
    empdep: new FormControl('', Validators.required),
    empmeter: new FormControl('', Validators.required),
  });


  Empregistration(){
      this.empregService.Empregistration(this.EmpregisterForm.value).subscribe((employereg: Employee)=>{
        console.log("Employee registered", employereg);
      });
      
    }

    
    

  logoutbtn: boolean;
  constructor(private apiService: ApiService,private empregService: EmpregService,private router: Router) {
    apiService.getLoggedInName.subscribe((name: any) => this.changeName(name));
    if (this.apiService.isLoggedIn()) {
      console.log("loggedin");
      this.logoutbtn = true
    }
    else {

      this.logoutbtn = false
    }
  }

  get f() { return this.EmpregisterForm.controls; }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.EmpregisterForm.invalid) {
          return;
      }
      if(this.submitted)
      {
        //this.router.navigateByUrl('overview');
        window.top.close();
        alert("Employee Registered");
        this.EmpregisterForm.reset();
        this.submitted=false;
      }
      
  }
  close(){
    this.EmpregisterForm.reset();
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;

  }
  logout() {
    this.apiService.deleteToken();
    window.location.href = "http://localhost:4200";
  }

  ngOnInit(): void {
  }

}
