import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../variables.css', './header.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
