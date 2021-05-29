import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CustomerResultsModel } from 'src/app/models/coustomer.models';
import { CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit, OnDestroy {

  customerList: CustomerResultsModel
  subscription : Subscription
  searchText=""; 
  constructor( private service: CustomerService,
               private titleService : Title ) { 
      this.titleService.setTitle('List-Customer')
   }

  ngOnInit(): void {
    this.getCustomerList()
  }

  getCustomerList(){
    this.subscription = this.service.getCustomer().subscribe((data) =>{
      this.customerList = data.results;
    },(err)=>{
      console.log(err);
      alert(err.message + " " + err.name)
    });
  }

  DeleteCustomer(id){
   this.service.deleteCustomer(id).subscribe(val=>{
     this.getCustomerList();
   }); 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe() 
  }


}
