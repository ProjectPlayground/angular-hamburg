import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['../variables.css', './button.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {

    @Input() public href: string = '#';
    @Input() public type: string = "secondary";
    @Input() public contentClassName: string;
    @Input() public title: string = "default title";

    constructor() {
    }

    ngOnInit() {
    }

}
