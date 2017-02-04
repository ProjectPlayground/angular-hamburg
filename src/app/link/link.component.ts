import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['../variables.css', './link.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class LinkComponent implements OnInit {

  @Input() public className: string = '';
  @Input() public target: string = '';
  @Input() public href: string = '';
  @Input() public title: string = '';
  @Input() public children: string = '';

  constructor() { }

  ngOnInit() {
  }

}
