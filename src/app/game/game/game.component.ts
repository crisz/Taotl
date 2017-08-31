import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cards = ['red god', 'red god', 'black god', 'ah'];
  constructor() { }

  ngOnInit() {
  }

  addCard() {
    this.cards.push('black god');
    console.log(this.cards);
  }

}
