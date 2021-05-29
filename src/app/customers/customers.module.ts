import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './Pipe/filter.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [CustomersComponent, ListCustomersComponent, EditCustomerComponent, AddCustomerComponent, DeleteCustomerComponent, SearchCustomerComponent, ViewCustomerComponent, FilterPipe],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    MatNativeDateModule,
    MatDatepickerModule,
    // MatButtonModule,
    MatFormFieldModule, 
    MatInputModule

  ]
})
export class CustomersModule { }
