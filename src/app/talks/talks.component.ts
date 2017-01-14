import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['../variables.css', './talks.component.css']
})
export class TalksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  renderTalks() {
    return "renderTalks";
  }

}
