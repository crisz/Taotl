import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenCardComponent } from './hidden-card.component';

describe('HiddenCardComponent', () => {
  let component: HiddenCardComponent;
  let fixture: ComponentFixture<HiddenCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
