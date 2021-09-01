import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../core/services/employee.service';
import { NewEmployee } from '../shared/models/newEmployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  newemployee:NewEmployee = {
    name: '',
    password:'',
    designation:''
  }

  result!:boolean;

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.newemployee).subscribe((resp) => {
      if (resp) {
        this.result = true;
      }
    });
  }

}
