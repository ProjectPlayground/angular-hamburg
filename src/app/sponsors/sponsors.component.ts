import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['../variables.css', './sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sponsors() {
    return "sponsors!";
  }
}
