import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WebsiteComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    WebsiteComponent
  ]
})
export class WebsiteModule {
}
