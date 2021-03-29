import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-base',
  template: `
  <div>
      base works!!
  </div>
`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  employee = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    address: '',
    available: false
  };
  id = null;
  currentEmployee = null;
  currentIndex = -1;
  submitted = false;

  constructor(protected employeeService: EmployeesService, protected activatedRoute: ActivatedRoute, protected router: Router) { }

  ngOnInit(): void {
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

  read(id): void {
    this.employeeService.read(id)
      .subscribe(
        employee => {
          this.currentEmployee = employee;
          console.log(employee);
        },
        error => {
          console.log(error);
        }
      );
  }

  getEmployee(id): void {
    this.employeeService.read(id)
      .subscribe(
        employee => {
          this.currentEmployee = employee;
          console.log(employee);
        },
        error => {
          console.log(error);
        }
        
      );
  }

  updateEmployee(): void {
    this.currentIndex = this.activatedRoute.snapshot.params.id
    this.employeeService.update(this.currentIndex, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteEmployee(): void {
    this.currentIndex = this.activatedRoute.snapshot.params.id
    this.employeeService.delete(this.currentIndex)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
