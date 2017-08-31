import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { CardsModule } from '../cards/cards.module';
import { OvalComponent } from './oval/oval.component';

@NgModule({
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    GameComponent
  ],
  declarations: [
    GameComponent,
    OvalComponent
  ]
})
export class GameModule { }
