import { AdComponent } from './ad.component';
import { Input, Component } from '@angular/core';

@Component({
    template: `
        <div class="hero-profile">
            <h3>Featured Hero Profile</h3>
            <h4>{{data.name}}</h4>
            
            <p>{{data.bio}}</p>
            
            <strong>Hire tihs hero today!</strong>
        </div>
    `,
    styles: [
        `
        .hero-profile {
            border: 1px solid gray;
            padding: 5px;
            padding-bottom: 20px;
            padding-left: 20px;
            border-radius: 10px;
            background-color: lightgreen;
            color: black;
          }
        `
    ]
})
export class HeroProfileComponent implements AdComponent {
    @Input() data: any;
}