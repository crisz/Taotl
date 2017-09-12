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
  width = 1457; // todo: refactoring
  height = 650; // todo: refactoring;
  cards;
  numberOfCards = 5;
  cc = getAllowedCards();
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.cards = [];
    for (let i = 0; i < this.numberOfCards; i++) {
      this.cards.push(this.cc[Math.round(Math.random() * this.cc.length)])
    }
    // this.transform = this.sanitizer.bypassSecurityTrustStyle('rotateZ(' + - angle * 57.2958 + 'deg)');
  }

  getPosition() {
    const angle = 2 * Math.PI * this.id / this.total;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const top = (cos + 1) * this.height * 0.7 / 2 + 'px';
    const left = (sin + 1) * this.width * 0.7 / 2;
    const rotate =  - angle * 57.2958 + 'deg';
    console.log('player ', this.id, {
      top,
      left,
      rotate
    });
    return {
      top,
      left,
      rotate: '45deg'
    }
  }

}
