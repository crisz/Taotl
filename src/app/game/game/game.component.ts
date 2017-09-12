import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() players = [];

  constructor() { }

  ngOnInit() {

  }

}
