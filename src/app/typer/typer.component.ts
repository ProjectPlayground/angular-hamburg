import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {typings} from '../config'

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['../variables.css', './typer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TyperComponent implements OnInit, AfterViewInit {

  private randomDelay: number;

  constructor() {
    this.randomDelay = this.calculateRandom();
  }

  calculateRandom() {
    return Math.floor(Math.random() * 350) + 100;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

}
