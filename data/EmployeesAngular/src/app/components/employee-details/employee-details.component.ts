import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent extends BaseComponent implements OnInit {
  currentEmployee = null;
  message = '';


  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
