import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Interaction } from 'src/app/shared/models/interaction';

@Component({
  selector: 'app-client-interaction',
  templateUrl: './client-interaction.component.html',
  styleUrls: ['./client-interaction.component.css']
})
export class ClientInteractionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private interactionService: InteractionService) { }

  id!: number;
  interaction!: Interaction[];
  result!: boolean;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => { this.id = Number(param.get('id')) })
    this.interactionService.getInteractionByClientId(this.id).subscribe(ci => {
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
