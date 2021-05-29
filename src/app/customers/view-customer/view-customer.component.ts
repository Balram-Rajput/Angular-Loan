import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerResultsModel } from 'src/app/models/coustomer.models';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit, OnDestroy {

  customerId: string;
  customerDetails:CustomerResultsModel;
  subscription : Subscription;
  constructor( private service: CustomerService,
               private activatedRout: ActivatedRoute,
               private titleService : Title ) { 
      this.titleService.setTitle('View-Customer')
  }


  ngOnInit(): void {
    this.activatedRout.params.subscribe(data=>{
      this.customerId = data.id;
    })
    this.getCustomerView()
  }

  getCustomerView(){
    this.subscription = this.service.viewCustomer(this.customerId).subscribe(data=>{
      this.customerDetails = data.results;
    },(err)=>{
      alert(err.message);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe() 
  }


}
