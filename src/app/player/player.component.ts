import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { getCircleTop, getCircleLeft } from 'app/math';
import { DomSanitizer } from '@angular/platform-browser';
import { getAllowedCards } from 'app/game/game.utility';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() id: number;
  @Input() total: number;
  @Input() name: string;
  @HostBinding('style.left') left;
  @HostBinding('style.top') top;
  @HostBinding('style.transform') transform;
  width = 1020; // todo: refactoring
  height = 650; // todo: refactoring;
  cards;
  cc = getAllowedCards();
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.cards = [];
    for (let i = 0; i < 4; i++) {
      this.cards.push(this.cc[Math.round(Math.random() * this.cc.length)])
    }
    const angle = 2 * Math.PI * this.id / this.total;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    this.left = '0';
    this.top = '0';
    // this.left = (sin + 1) * this.width / 2 - 500 + 'px';
    // this.top = (cos + 1) * this.height / 2 - 15 + 'px';
    // this.transform = this.sanitizer.bypassSecurityTrustStyle('rotateZ(' + - angle * 57.2958 + 'deg)');
  }

}
