import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { QuestsComponent } from './quests/quests.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { BackButtonDisableModule } from './back-button-disable.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    QuestsComponent,
    InventoryComponent,
    AbilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
