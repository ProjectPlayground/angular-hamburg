import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
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
