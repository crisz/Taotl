import { Component, OnInit, Input} from '@angular/core';
import { getArchHeightFromZero, getArchAngle } from '../../math';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name = '';
  @Input() index: number;
  @Input() total: number;
  imageSource;
  imageClass;
  cardClass;
  isPlain: boolean;
  corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  suit;
  value;
  suits = {
    h: 'hearts',
    d: 'diamonds',
    c: 'clubs',
    s: 'spades'
  }
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const dashedName = this.name
      .toLowerCase()
      .split(' ')
      .join('-');
    console.log(this.name.length);
    if (this.name.length === 2) {
      this.isPlain = true;
      this.suit = this.suits[this.name[1]];
      this.imageSource = `../../../assets/${this.suit}.png`;
      this.imageClass = `img-${this.suit}`;
      this.value = this.name[0];
      console.log(this.suit, this.imageSource, this.value);
    } else {
      this.isPlain = false;
      this.imageSource = `../../../assets/${dashedName}.png`;
      this.imageClass = `img-${dashedName}`;
      this.cardClass = `card-${dashedName}`;
    }
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
    const angle = getArchAngle(this.index, this.total - 1);
    const safeValue = this.sanitizer.bypassSecurityTrustStyle(`rotateZ(${angle}deg)`);
    console.log(safeValue);
    return safeValue;
  }
}
