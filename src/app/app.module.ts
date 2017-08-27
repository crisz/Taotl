import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { WebsiteModule } from './website/website.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    WebsiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
