import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['../variables.css', './section.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SectionComponent implements OnInit {

  public title: string = "";
  public text: string = "";
  public children: string = "";
  public contentClassName: string = "";

  constructor() { }

  ngOnInit() {
  }

}
