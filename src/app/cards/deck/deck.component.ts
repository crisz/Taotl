import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() cards = [];
  allowedCards = ['red god', 'black god'];
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
