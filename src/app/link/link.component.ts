import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['../variables.css', './link.component.css']
})
export class LinkComponent implements OnInit {

  public className: string = '';
  public href: string = "#href";
  public title: string = 'title';
  public children: string = "children";

  constructor() { }

  ngOnInit() {
  }

}
