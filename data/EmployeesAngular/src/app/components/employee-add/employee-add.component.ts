import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee = {
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    address: '',
    available: false
  };
  submitted = false;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
  }

  createEmployee(): void {
    const data = {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      phoneNo: this.employee.phoneNo,
      email: this.employee.email,
      address: this.employee.address
    };

    this.employeeService.create(data)
      .subscribe (
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      address: '',
      available: false
    };
  }
}
