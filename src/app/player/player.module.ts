import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { CardsModule } from 'app/cards/cards.module';

@NgModule({
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    PlayerComponent
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule { }
