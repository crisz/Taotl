import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenDeckComponent } from './hidden-deck.component';

describe('HiddenDeckComponent', () => {
  let component: HiddenDeckComponent;
  let fixture: ComponentFixture<HiddenDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
