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

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const dashedName = this.name
      .toLowerCase()
      .split(' ')
      .join('-');
    this.imageSource = `../../../assets/${dashedName}.svg`;
    this.imageClass = `img-${dashedName}`;
    this.cardClass = `card-${dashedName}`;
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
