import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LoginComponent } from './login/login.component';
import { CardsModule } from 'app/cards/cards.module'; // to be removed
import { OpenLinksComponent } from './open-links/open-links.component';
import { PlayerModule } from 'app/player/player.module';
import { GameModule } from 'app/game/game.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CardsModule,
    PlayerModule,
    GameModule
  ],
  declarations: [
    WebsiteComponent,
    HeaderComponent,
    FooterComponent,
    TutorialComponent,
    LoginComponent,
    OpenLinksComponent
  ],
  exports: [
    WebsiteComponent
  ]
})
export class WebsiteModule {
}
