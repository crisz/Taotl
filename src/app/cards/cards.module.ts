import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import { HiddenDeckComponent } from './hidden-deck/hidden-deck.component';
import { HiddenCardComponent } from './hidden-card/hidden-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DeckComponent,
    CardComponent,
    HiddenDeckComponent
  ],
  declarations: [
    DeckComponent,
    CardComponent,
    HiddenDeckComponent,
    HiddenCardComponent
  ]
})
export class CardsModule { }
