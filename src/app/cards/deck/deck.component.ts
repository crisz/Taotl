import { Component, OnInit, Input } from '@angular/core';
import { getAllowedCards } from 'app/game/game.utility';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() cards = [];
  allowedCards = getAllowedCards();
  constructor() { }

  ngOnInit() {
    this.cards
      .forEach(card => {
        if (this.allowedCards.indexOf(card.toLowerCase()) === -1)
          throw new Error(card + ' is not a card');
      });
  }

  log(x) {
    console.log(x);
  }

}
