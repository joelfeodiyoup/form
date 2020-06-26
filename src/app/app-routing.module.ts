import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { QuestsComponent } from './quests/quests.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AbilitiesComponent } from './abilities/abilities.component';


const routes: Routes = [
  { path: 'Map', component: MapComponent },
  { path: 'Quests', component: QuestsComponent },
  { path: 'Inventory', component: InventoryComponent },
  { path: 'Abilities', component: AbilitiesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
