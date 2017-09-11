import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { getAllowedCards } from 'app/game/game.utility';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() cards = [];
  allowedCards = getAllowedCards();
  @HostBinding('style.text-indent') shift;

  ngOnInit() {
    this.shift = (this.cards.length - 1) * 30 + 'px';
    // Check if all the cards are allowed
    this.cards
      .forEach(card => {
        if (!card) return;
        if (this.allowedCards.indexOf(card.toLowerCase()) === -1)
          throw new Error(card + ' is not a card');
      });
  }

  log(x) {
    console.log(x);
  }

}
