import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit{
  teamForm: FormGroup;
  teamFormSub: Subscription;
  players: FormArray;

  constructor(private teamFormService: TeamFormService) {}

  ngOnInit() {
    this.teamFormSub = this.teamFormService.teamForm$
      .subscribe(team => {
        this.teamForm = team;
        this.players = this.teamForm.get('players') as FormArray;
      })
  }
}
