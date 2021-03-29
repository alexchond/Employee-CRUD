import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent extends BaseComponent implements OnInit {

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


  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.read(id);
    this.setCurrentEmployee(this.employee,id)
  }

}
