import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar.component';
import { QuestsComponent } from './quests/quests.component';
import { BackButtonDisableModule } from './back-button-disable.module';

import { MotorFormModule } from './motor-form/motor-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { CssExperimentsModule } from './css-experiments/css-experiments.module';
import { AngularExperimentsModule } from './angular-experiments/angular-experiments.module';
import { FooterComponent } from './layout/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    MotorFormModule,
    BrowserAnimationsModule,
    DynamicFormModule,
    CssExperimentsModule,
    AngularExperimentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
