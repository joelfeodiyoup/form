import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class TeamFormService {
  private teamForm: BehaviorSubject<FormGroup | undefined> =
    new BehaviorSubject(this.fb.group(
      new TeamFormService(new Team('Cavaliers'))
    ));

    teamForm$: Observable<FormGroup> = this.teamForm.asObservable();

    constructor(private fb: FormBuilder) {}

    addPlayer() {
      const currentTeam = this.teamForm.getValue();
      const currentPlayers = currentTeam.get('players') as FormArray;

      currentPlayers.push(
        this.fb.group(
          new PlayerForm(new this.addPlayer('', '', 0, ''))
        )
      );

      this.teamForm.next(currentTeam);
    }

    deletePlayer(i: number) {
      const currentTeam = this.teamForm.getValue();
      const currentPlayers = currentTeam.get('players') as FormArray;

      currentPlayers.removeAt(i);
      this.teamForm.next(currentTeam);
    }
}
