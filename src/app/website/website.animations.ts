import {
  animation,
  trigger,
  animate,
  transition,
  style,
  query,
  animateChild,
  group
} from '@angular/animations';

export const leaveAnimation = trigger('leave', [
  transition(':leave', [
    style({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }),
    group([
      query('@slideUp', [
        animateChild()
      ]),
      query('@slideDown', [
        animateChild()
      ])
    ])
  ])
]);

export const slideUp = trigger('slideUp', [
  transition(':leave', [
    animate('600ms cubic-bezier(.96,.15,.75,.61)', style({transform: 'translateY(-100%)'}))
  ])
]);

export const slideDown = trigger('slideDown', [
  transition(':leave', [
    animate('700ms cubic-bezier(.96,.15,.75,.61)', style({transform: 'translateY(100%)'}))
  ])
]);
