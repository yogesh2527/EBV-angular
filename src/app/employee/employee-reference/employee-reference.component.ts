import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { EmpRefServiceService } from './emp-ref-service.service';

@Component({
  selector: 'app-employee-reference',
  templateUrl: './employee-reference.component.html',
  styleUrls: ['./employee-reference.component.scss']
})
export class EmployeeReferenceComponent implements OnInit {
  

  constructor(private emprefserviceservice:EmpRefServiceService) { }

  ngOnInit(): void {
    
  }
  
  // To initialize FormGroup  
  regiForm = new FormGroup({  
    'FirstName' : new FormControl(null, Validators.required),  
    'LastName' : new FormControl(null, Validators.required), 
    'Designation' : new FormControl(null,Validators.required),
    'Relation':new FormControl(null, Validators.required),
    'Mobile' : new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10), Validators.maxLength(10)])),
    'Email':new FormControl(null, Validators.compose([Validators.required,Validators.email])),
} ) 

// On Change event of Toggle Button  

// Executed When Form Is Submitted  
message:any
// Executed When Form Is Submitted  
onFormSubmit(form:NgForm)  
{  
  console.log(form);  

  this.emprefserviceservice.EmpRefServiceService(form).subscribe(
    data => this.message=data,
    error => this.message=error
  )

  console.log(this.message)
}  

}

