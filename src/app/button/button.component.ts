import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['../variables.css', './button.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

    public href: string = '#href';
    public secondary: boolean = false;
    public large: boolean = false;
    public className: string = '';
    public children: string = 'button text';

    constructor() {
    }

    ngOnInit() {
    }

}
