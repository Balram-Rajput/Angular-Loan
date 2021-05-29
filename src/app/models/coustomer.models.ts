export class CustomerModel {
  _id:string;
  firstName:string;
  lastName: string;
  emailAddress:string;
  phoneNumber:string;
  dob:string;
}

export interface CustomerRoot {
  status: number
  results: CustomerResultsModel
}

export interface CustomerResultsModel {
  _id: string
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  dob: string
  __v: number
}