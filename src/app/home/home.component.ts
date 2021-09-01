import { Component, OnInit } from '@angular/core';
import { ClientService } from '../core/services/client.service';
import { EmployeeService } from '../core/services/employee.service';
import { Client } from '../shared/models/client';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private clientService: ClientService, private employeeService: EmployeeService) { }

  client!: Client[];
  employee!: Employee[]

  ngOnInit(): void {

    this.clientService.getAllClients().subscribe(
      c=>{
        this.client = c
      }
    )

    this.employeeService.getAllEmployees().subscribe(
      e=>{
        this.employee = e
      }
    )
  }

  deleteEmployee(id:number) {
    this.employeeService.deleteEmployee(id).subscribe();
    window.location.reload();
  }

  deleteClient(id:number) {
    this.clientService.deleteClient(id).subscribe();
    window.location.reload();
  }
}
