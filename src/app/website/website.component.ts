import { Component, OnInit, HostBinding } from '@angular/core';
import { leaveAnimation, slideUp, slideDown } from 'app/website/website.animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
  animations: [ leaveAnimation, slideUp, slideDown ]
})
export class WebsiteComponent implements OnInit {

  @HostBinding('@leave') leaveAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
