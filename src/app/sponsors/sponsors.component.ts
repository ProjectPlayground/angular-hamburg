import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['../variables.css', './sponsors.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sponsors() {
    return "sponsors!";
  }
}
