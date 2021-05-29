import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerResultsModel } from 'src/app/models/coustomer.models';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit,OnDestroy{

  customerId:string;
  CustomerForm: FormGroup;
  customerDetails: CustomerResultsModel;
  subscription1 : Subscription;
  subscription2 : Subscription;

  constructor( private activatedRouter: ActivatedRoute,
               private fb : FormBuilder,
               private customerService: CustomerService,
               private _router : Router,
               private titleService : Title) { 
    this.titleService.setTitle('Edit-Customer')
  }


  ngOnInit(): void {
    // customer id
    this.activatedRouter.params.subscribe(data=>{
      this.customerId = data.id;
    });

    // Customer Form
    this.CustomerForm = this.fb.group({
      "firstName": new FormControl('',[Validators.required,Validators.maxLength(20)]),
      // "lastName": new FormControl('',[Validators.required,Validators.max(10)]),
      "emailAddress": new FormControl('',[Validators.required,Validators.email]),
      "phoneNumber": new FormControl('',[Validators.pattern("^[0-9]*$")]),
      "dob" : new FormControl('')
    });
    this.GetCustomerDetails()
  }

  GetCustomerDetails(){
    //Get Details of Customer
    this.subscription1 = this.customerService.viewCustomer(this.customerId).subscribe(data=>{
      this.customerDetails = data.results;
      const newCustomerObj = {
        "firstName": this.customerDetails.firstName,
        // "lastName": this.customerDetails.lastName,
        "emailAddress": this.customerDetails.emailAddress,
        "phoneNumber": this.customerDetails.phoneNumber,
        "dob" : this.customerDetails.dob
      }

      this.CustomerForm.setValue(newCustomerObj)
    },(err)=>{
      alert(err.message)
    });
  }

  get f(){
    return this.CustomerForm;
  }


  FormSubmit(formValue:FormGroup){
    const data = formValue.value;

    const newCustomerObj = {
      "userId": this.customerId,
      "firstName": data.firstName,
      "lastName": data.lastName,
      "emailAddress": data.emailAddress,
      "phoneNumber": data.phoneNumber,
      "dob" : data.dob
    };

    this.subscription2 = this.customerService.editCustomer(newCustomerObj).subscribe(val=>{
      alert(val.message)
      this._router.navigate(['/customers'])
    },err=>{ err.message })
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    if(this.subscription2){
      this.subscription2.unsubscribe();
    }
  }
  

}
