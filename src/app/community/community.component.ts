import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CommunityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  renderPlatforms() {
    return "renderPlatforms!";
  }

}
