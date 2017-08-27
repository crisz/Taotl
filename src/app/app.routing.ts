import { Routes } from '@angular/router';
import { WebsiteComponent } from 'app/website/website.component';
import { TutorialComponent } from 'app/website/tutorial/tutorial.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: WebsiteComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  }
];
