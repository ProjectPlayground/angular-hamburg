import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['../variables.css', './container.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContainerComponent implements OnInit {

  public children: string = "children";

  constructor() { }

  ngOnInit() {
  }

}
