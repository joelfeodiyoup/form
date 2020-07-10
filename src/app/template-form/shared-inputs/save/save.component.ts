import { Component, Input } from '@angular/core';
@Component({
    selector: 'save',
    templateUrl: './save.component.html',
    styles: [`
    :host {
        z-index:1;
    }
    `]
})
export class SaveComponent {
    save() {
        console.log('hello');
    }
}