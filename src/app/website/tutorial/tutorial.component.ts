import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  scale = this.sanitizer.bypassSecurityTrustStyle('transform: scale(1)');
  players = ['you', 'a', 'b']; // , 'pippo', 'pluto', 'paperino', 'topolino', 'foo', 'bar'

  constructor(private sanitizer: DomSanitizer) { }

  changed($event) {
    this.scale = this.sanitizer.bypassSecurityTrustStyle('transform: scale(' + $event.target.value + ')');
  }

  ngOnInit() {
  }

}
