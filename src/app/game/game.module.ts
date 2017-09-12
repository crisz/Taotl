import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { PlayerModule } from '../player/player.module';
import { OvalComponent } from './oval/oval.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerModule
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
