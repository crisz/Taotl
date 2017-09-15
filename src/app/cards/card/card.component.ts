import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Injector,
  ChangeDetectorRef
} from '@angular/core';
import { getArchHeightFromZero, getArchAngle } from '../../math';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() properties;
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
  @HostBinding('class.played-card') isPlayed = false;
  suits = {
    h: 'hearts',
    d: 'diamonds',
    c: 'clubs',
    s: 'spades',
    t: 'totem'
  }
  cd: ChangeDetectorRef;
  protected sanitizer;
  constructor(injector: Injector) {
    this.sanitizer = injector.get(DomSanitizer);
    this.cd = injector.get(ChangeDetectorRef);
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
    if (this.index !== 2) return;
    this.properties.index = 0;
    this.properties.total = 1;
    this.isPlayed = true;
    console.log(this.properties.index);
    window.setTimeout(() => console.log('#######' + this.properties.index, this.angle), 1000);
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

  get angle() {
    if (!this.properties) return;
    if (this.properties.total === 1) return this.sanitizer.bypassSecurityTrustStyle(`rotateZ(0deg)`)
    const angle = getArchAngle(this.properties.index, this.properties.total - 1);
    console.log('angle', this.properties.index, angle)
    if (!angle) return 0;
    const safeValue = this.sanitizer.bypassSecurityTrustStyle(`rotateZ(${angle}deg)`);
    return safeValue;
  }
}
