import { Component, OnInit, Input, Injector, HostBinding } from '@angular/core';
import { getArchHeightFromZero, getArchAngle } from '../../math';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name = '';
  @Input() index = 0;
  @Input() total = 1;
  imageSource;
  imageClass;
  cardClass;
  isHidden: boolean;
  isPlain: boolean;
  corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  suit;
  value;
  suits = {
    h: 'hearts',
    d: 'diamonds',
    c: 'clubs',
    s: 'spades',
    t: 'totem'
  };
  @HostBinding('class.played-card') isPlayed = false;

  protected sanitizer;
  constructor(injector: Injector) {
    this.sanitizer = injector.get(DomSanitizer);
    // public sanitizer: DomSanitizer
  }

  ngOnInit() {
    if (!this.name) this.name = 'hidden';
    const dashedName = this.name
      .toLowerCase()
      .split(' ')
      .join('-');
    if (this.name.length === 2) {
      this.isPlain = true;
      this.suit = this.suits[this.name[1]];
      this.imageSource = `../../../assets/${this.suit}.png`;
      this.imageClass = `img-${this.suit}`;
      this.value = this.name[0] === '0' ? '10' : this.name[0];
    } else {
      this.isPlain = false;
      this.cardClass = `card-${dashedName}`;
      this.isHidden = false;
      if (dashedName === 'hidden') return this.isHidden = true;
      this.imageSource = `../../../assets/${dashedName}.png`;
      this.imageClass = `img-${dashedName}`;
    }
  }
  playCard() {
    this.isPlayed = true;
    this.index = 0;
    this.total = 1;
  }
  getLeft() {
    return this.index * -30 + 'px';
  }

  getTop() {
    let height = getArchHeightFromZero(this.index, this.total);
    height *= 200;
    height = 20 - height;
    return height + 'px';
  }

  getAngle() {
    if (this.total === 1) return this.sanitizer.bypassSecurityTrustStyle(`rotateZ(0deg)`);
    const angle = getArchAngle(this.index, this.total - 1);
    if (!angle) return 0;
    return this.sanitizer.bypassSecurityTrustStyle(`rotateZ(${angle}deg)`);
  }
}
