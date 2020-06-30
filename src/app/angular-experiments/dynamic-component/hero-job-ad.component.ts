import { AdComponent } from './ad.component';
import { Input, Component } from '@angular/core';

@Component({
    template: `
        <div class="job-ad">
            <h4>{{data.headline}}</h4>
            
            {{data.body}}
        </div>
    `,
    styles: [
        `
        .job-ad {
            border: 1px solid gray;
            padding: 5px;
            padding-bottom: 20px;
            padding-left: 20px;
            border-radius: 10px;
            background-color: lightblue;
            color: black;
          }
        `
    ]
})
export class HeroJobAdComponent implements AdComponent {
    @Input() data: any;
}