import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit,OnDestroy{

  CustomerForm:FormGroup;
  subscription1:Subscription;

  constructor( private fb : FormBuilder,
               private customerService: CustomerService,
               private titleService : Title,
               private _router : Router ) { 
      this.titleService.setTitle('Add-Customer')
    }


  ngOnInit(): void {

    this.CustomerForm = this.fb.group({
      "firstName": new FormControl('',[Validators.required,Validators.maxLength(20)]),
      //"lastName": new FormControl('',[Validators.required,Validators.max(20)]),
      "emailAddress": new FormControl('',[Validators.required,Validators.email]),
      "phoneNumber": new FormControl('',[Validators.pattern("^[0-9]*$")]),
      "dob" : new FormControl('')
    });
  }

  get f(){
    return this.CustomerForm;
  }

  FormSubmit(formValue:FormGroup){
    const data = formValue.value;
    if(formValue.valid){
      const newCustomerObj = {
        "firstName": data.firstName,
        // "lastName": data.lastName,
        "emailAddress": data.emailAddress,
        "phoneNumber": data.phoneNumber,
        "dob" : data.dob
      };

      console.log(newCustomerObj);  

      this.subscription1 = this.customerService.addCustomer(newCustomerObj).subscribe(val=>{
        if(val.status==200){
          this.CustomerForm.reset()
          this._router.navigate(['/customers'])
          alert(val.message)
        }
      },err=>{
        alert(err.message)
      })
    }
  }



  ngOnDestroy(): void {
    if(this.subscription1){
      this.subscription1.unsubscribe();
    }

  }

}
