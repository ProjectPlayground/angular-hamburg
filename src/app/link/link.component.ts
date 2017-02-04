import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./font-awesome.min.css', '../variables.css', './link.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LinkComponent implements OnInit {

  @Input() public class: string = '';
  @Input() public target: string = '';
  @Input() public href: string = '';
  @Input() public title: string = '';
  @Input() public children: string = '';

  constructor() { }

  ngOnInit() {
  }

}
