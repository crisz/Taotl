import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cards;
  constructor() { }

  ngOnInit() {

  }

  addCard() {
    this.cards.push('black god');
    console.log(this.cards);
  }

}
