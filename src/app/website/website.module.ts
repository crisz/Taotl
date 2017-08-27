import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WebsiteComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TutorialComponent
  ],
  exports: [
    WebsiteComponent
  ]
})
export class WebsiteModule {
}
