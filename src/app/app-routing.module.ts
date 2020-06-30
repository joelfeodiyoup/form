import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestsComponent } from './quests/quests.component';


const routes: Routes = [
  { path: 'Quests', component: QuestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
