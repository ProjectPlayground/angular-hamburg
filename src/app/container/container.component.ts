import {Component, style, ViewEncapsulation, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['../variables.css', './container.component.css'],
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
export class ContainerComponent {

  public children: string = "children";

  constructor() { }

}
