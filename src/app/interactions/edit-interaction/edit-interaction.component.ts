import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Client } from 'src/app/shared/models/client';
import { Employee } from 'src/app/shared/models/employee';
import { NewInteraction } from 'src/app/shared/models/newInteraction';

@Component({
  selector: 'app-edit-interaction',
  templateUrl: './edit-interaction.component.html',
  styleUrls: ['./edit-interaction.component.css']
})
export class EditInteractionComponent implements OnInit {

  constructor(private interactionService: InteractionService, private clientService: ClientService, private employeeService: EmployeeService) { }

  newInteraction:NewInteraction = {
    clientId: 0,
    empId: 0,
    intType: '',
    intDate: new Date,
    remarks: ''
  }
  
  result!:boolean;
  client!:Client[];
  employee!:Employee[];

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(c=>{this.client = c});
    this.employeeService.getAllEmployees().subscribe(e=>{this.employee = e});
  }

  addInteractions() {
    this.interactionService.addInteraction(this.newInteraction).subscribe((resp) => {
      if (resp) {
        this.result = true;
      }
    });
  }

}
