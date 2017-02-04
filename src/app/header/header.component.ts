import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {nextMeetup} from '../config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../variables.css', './header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  public link: string;
  public date: string;

  constructor() {

    this.link = nextMeetup.link;
    this.date = nextMeetup.date;
  }

  ngOnInit() {
  }

}
