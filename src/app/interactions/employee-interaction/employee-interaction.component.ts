import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Interaction } from 'src/app/shared/models/interaction';

@Component({
  selector: 'app-employee-interaction',
  templateUrl: './employee-interaction.component.html',
  styleUrls: ['./employee-interaction.component.css']
})
export class EmployeeInteractionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private interactionService: InteractionService) { }

  id!: number;
  interaction!: Interaction[];
  result!: boolean;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => { this.id = Number(param.get('id')) })
    this.interactionService.getInteractionByEmployeeId(this.id).subscribe(ci => {
      if (ci == null) {
        this.result = false;
      }
      else {
        this.result = true;
        this.interaction = ci
      }
    })
  }

  deleteInteraction(id:number) {
    this.interactionService.deleteInteraction(id).subscribe();
    window.location.reload();
  }
}
