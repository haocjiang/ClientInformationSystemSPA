import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/shared/models/employee';
import { NewEmployee } from 'src/app/shared/models/newEmployee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private employeeService:EmployeeService) { }

  id!:number;
  result!:boolean;
  employee!:Employee;

  newemployee:NewEmployee = {
    name: '',
    password:'',
    designation:''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => { this.id = Number(param.get('id')) })
    this.employeeService.getEmployeeDetail(this.id).subscribe(e=>
      {
        this.employee = e;
        this.newemployee.name = e.name;
        this.newemployee.password = e.password;
        this.newemployee.designation = e.designation;
      })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.newemployee).subscribe((resp) => {
      if (resp) {
        this.result = true;
      }
    });
  }

}
