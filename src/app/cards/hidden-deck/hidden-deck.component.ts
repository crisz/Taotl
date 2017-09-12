import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DeckComponent } from 'app/cards/deck/deck.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hidden-deck',
  templateUrl: './hidden-deck.component.html',
  styleUrls: ['./hidden-deck.component.scss']
})
export class HiddenDeckComponent extends DeckComponent implements OnInit {
  @Input() total: number;
  @Input() position;
  @HostBinding('style.text-indent') shift;
  @HostBinding('style.top') top;
  @HostBinding('style.left') left;
  transform;
  cards = [];
  constructor(private sanitizer: DomSanitizer) {
    super();
  }
  ngOnInit() {
    this.shift = (this.total - 1) * 60 + 'px';
    for (let i = 0; i < this.total; i++) {
      this.cards.push('hidden');
    }
    this.setPosition();
  }

  setPosition() {
    // this.top = this.position.top;
    // this.left = this.position.left - 1020 / 2 + 'px';
    this.transform = this.sanitizer.bypassSecurityTrustStyle('transform: rotateZ(' + this.position.rotate + ')');
  }
}
