import { Component, OnInit, Input } from '@angular/core';
import { DeckComponent } from 'app/cards/deck/deck.component';

@Component({
  selector: 'hidden-deck',
  templateUrl: './hidden-deck.component.html',
  styleUrls: ['./hidden-deck.component.scss']
})
export class HiddenDeckComponent extends DeckComponent implements OnInit {
}
