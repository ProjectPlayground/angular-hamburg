import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['../variables.css', './container.component.css']
})
export class ContainerComponent implements OnInit {

  public children: string = "children";

  constructor() { }

  ngOnInit() {
  }

}
