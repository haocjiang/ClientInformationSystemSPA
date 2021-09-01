import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { Interaction } from 'src/app/shared/models/interaction';
import { NewInteraction } from 'src/app/shared/models/newInteraction';

@Component({
  selector: 'app-edit-client-interactions',
  templateUrl: './edit-client-interactions.component.html',
  styleUrls: ['./edit-client-interactions.component.css']
})
export class EditClientInteractionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private interactionService: InteractionService) { }

  id!: number;
  result!: boolean;
  Interaction!: Interaction;

  newInteraction: NewInteraction = {
    clientId: 0,
    empId: 0,
    intType: '',
    intDate: new Date,
    remarks: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => { this.id = Number(param.get('id')) });
    this.interactionService.getInteractionDetail(this.id).subscribe(
      i => {
        this.Interaction = i;
        this.newInteraction.clientId = i.clientId;
        this.newInteraction.empId = i.empId;
        this.newInteraction.intType = i.intType;
        this.newInteraction.intDate = i.intDate;
        this.newInteraction.remarks = i.remarks;
      });
  }

  updateInteraction() {
    this.interactionService.updateInteraction(this.id, this.newInteraction).subscribe((resp) => {
      if (resp) {
        this.result = true;
      }
    });
  }
}
