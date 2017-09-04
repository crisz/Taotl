import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'open-links',
  templateUrl: './open-links.component.html',
  styleUrls: ['./open-links.component.scss']
})
export class OpenLinksComponent implements OnInit {

  @Input() links = [];
  constructor() { }

  ngOnInit() {
  }

}
