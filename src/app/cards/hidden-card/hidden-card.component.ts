import { Component, OnInit, Injector } from '@angular/core';
import { CardComponent } from 'app/cards/card/card.component';
import { getArchHeightFromZero, getArchAngle } from 'app/math';

@Component({
  selector: 'hidden-card',
  templateUrl: '../card/card.component.html',
  styleUrls: ['../card/card.component.scss'] // todo: remove unused css
})
export class HiddenCardComponent extends CardComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector)
  }
  getLeft() {
    console.log(this.index, -60);
    return this.index * -60 + 'px';
  }

  getTop() {
    let height = getArchHeightFromZero(this.index, this.total);
    height *= 200;
    height = 20 - height;
    return -height + 'px';
  }

  getAngle() {
    const angle = getArchAngle(this.index, this.total - 1);
    if (!angle) return 0;
    const safeValue = this.sanitizer.bypassSecurityTrustStyle(
      `rotateZ(-${angle}deg)`
    );
    return safeValue;
  }
}
