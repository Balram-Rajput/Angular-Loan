import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/enviroment.dev'
import { Observable } from 'rxjs';
import { CustomerResultsModel, CustomerRoot } from '../models/coustomer.models';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerUrl = environment.CUSTOMER_BASE_URL;
  constructor( private httpClient : HttpClient ) { }

  // Methods to communicate with our backedn APIs


  getCustomer():Observable<CustomerRoot>{
    return this.httpClient.get<CustomerRoot>(this.customerUrl + "list");
  }

  viewCustomer(id):Observable<CustomerRoot>{
    // return this.httpClient.get(this.customerUrl + "view"+"?userId="+id);
    return this.httpClient.get<CustomerRoot>(this.customerUrl + "view/"+id);
  }

  //Update Customer
  editCustomer(customerObj):Observable<any>{
    return this.httpClient.put<any>(this.customerUrl + 'update',customerObj)
  }

  // Post Customer
  addCustomer(customerObj):Observable<any>{
    return this.httpClient.post<any>(this.customerUrl + "add",customerObj);
  }

  deleteCustomer(id):Observable<any>{
    return this.httpClient.delete<any>(this.customerUrl + "delete/" + id)
  }

  searchCustomer(keyword){

  }

}
