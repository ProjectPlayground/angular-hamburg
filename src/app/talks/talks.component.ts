import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { nextTalks } from '../config'

@Component({
    selector: 'app-talks',
    templateUrl: './talks.component.html',
    styleUrls: ['../variables.css', './talks.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class TalksComponent implements OnInit {

    public talks: Array<any>;

    constructor() {

        this.talks = nextTalks;
    }

    ngOnInit() {
    }
}
