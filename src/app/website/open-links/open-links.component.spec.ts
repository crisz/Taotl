import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLinksComponent } from './open-links.component';

describe('OpenLinksComponent', () => {
  let component: OpenLinksComponent;
  let fixture: ComponentFixture<OpenLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
