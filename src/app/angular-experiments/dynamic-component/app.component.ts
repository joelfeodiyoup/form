import { OnInit, Component } from '@angular/core';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
    selector: 'app-dynamic-component',
    template: `
        <div>
            <app-ad-banner [ads]="ads"></app-ad-banner>
        </div>
    `,
})
export class DynamicComponent implements OnInit {
    ads: AdItem[];

    constructor(private adService: AdService) {}

    ngOnInit() {
        this.ads = this.adService.getAds();
    }
}