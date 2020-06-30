import { NgModule } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdService } from './ad.service';
import { DynamicComponent } from './app.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';

@NgModule({
    imports: [],
    providers: [AdService],
    declarations: [
        DynamicComponent,
        AdBannerComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective
    ],
    exports: [
        DynamicComponent
    ],
    entryComponents: [ HeroJobAdComponent, HeroProfileComponent ]
})
export class DynamicComponentModule {}