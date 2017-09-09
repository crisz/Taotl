import { Component, OnInit } from '@angular/core';
import { getAllowedCards } from 'app/game/game.utility';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cc = getAllowedCards();
  cards;
  constructor() { }

  ngOnInit() {
    this.cards = [];
    for (let i = 0; i < 6; i++) {
      this.cards.push(this.cc[Math.round(Math.random() * this.cc.length)])
    }
  }

  addCard() {
    this.cards.push('black god');
    console.log(this.cards);
  }

}
