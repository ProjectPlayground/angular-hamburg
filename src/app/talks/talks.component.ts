import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['../variables.css', './talks.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TalksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  renderTalks() {
    return "renderTalks";
  }

}
