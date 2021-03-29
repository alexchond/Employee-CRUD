import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { EmployeesService } from '../../services/employees.service';


@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent extends BaseComponent implements OnInit {


  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.read(id);
    this.setCurrentEmployee(this.employee,id);
    this.deleteEmployee();
  }

  deleteEmployee(): void {
    console.log(this.currentIndex);
    this.employeeService.delete(this.currentIndex)
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

}
