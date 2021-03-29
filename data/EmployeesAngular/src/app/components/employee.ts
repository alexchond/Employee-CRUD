export class Employee{
    id: number;
    firstName: string;
    lastName: string;
    phoneNo: string;
    email: string;
    address: string;
    constructor(id: number, firstName: string, lastName: string, phoneNo: string, email: string, address: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNo = phoneNo;
    this.email = email;
    this.address = address
    }
  }