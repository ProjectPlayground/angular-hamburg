import {Component, style, ViewEncapsulation, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate(300)
      ])
    ])
  ]
})
export class BannerComponent {

  constructor() { }

  ngOnInit() {
  }

}
