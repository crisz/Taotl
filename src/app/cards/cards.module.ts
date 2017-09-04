import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DeckComponent,
    CardComponent
  ],
  declarations: [DeckComponent, CardComponent]
})
export class CardsModule { }
