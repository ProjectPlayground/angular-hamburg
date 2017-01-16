import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-talks',
    templateUrl: './talks.component.html',
    styleUrls: ['../variables.css', './talks.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class TalksComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }


}

/***
 *
 *         <li class="talk freeSlot">
 <h3 class="title">Free Slot</h3>
 <p class="description">This slot could be yours!</p>
 <app-button class="submit" href="mailto:meetup@angular.hamburg" type="secondary">
 Submit a Talk
 </app-button>
 <p class="note">
 Trouble finding an idea for a talk?<br />
 Feel free to contact us.
 </p>
 </li>

 */
