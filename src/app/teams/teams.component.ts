import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['../variables.css', './teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  members() {
    return "members";
  }

}
