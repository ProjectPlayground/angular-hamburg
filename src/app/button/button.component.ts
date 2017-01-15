import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

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
    @Input('title') title: string = 't';

    constructor() {
    }

    ngOnInit() {
    }

}
