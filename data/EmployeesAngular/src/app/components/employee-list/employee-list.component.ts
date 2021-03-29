import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  currentEmployee = null;
  currentIndex = -1;
  fname = '';
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.readEmployees();
  }

  readEmployees(): void {
    this.employeesService.readAll()
      .subscribe(
        employees => {
          this.employees = employees;
          console.log(employees);
        },
        error => {
          console.log(error);
        }
      );
  }

  refresh(): void {
    this.readEmployees();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  setCurrentEmployee(employee, index): void {
    
    this.currentEmployee = employee;
    this.currentIndex = index;
    this.currentEmployee.firstName = employee.firstName;
    this.currentEmployee.lastName = employee.lastName;
    this.currentEmployee.phoneNo = employee.phoneNo;
    this.currentEmployee.email = employee.email;
    this.currentEmployee.address = employee.address;
  }


  searchByName(): void {
    this.employeesService.searchByName(this.fname)
      .subscribe(
        employees => {
          this.employees = employees;
          console.log(employees);
        },
        error => {
          console.log(error);
        }
      );
  }
}
