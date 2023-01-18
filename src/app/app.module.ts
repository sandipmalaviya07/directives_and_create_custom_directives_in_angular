import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BgHighLightDirective } from './bg-high-light.directive';
import { ShowDirective } from './show.directive';

@NgModule({
  declarations: [
    AppComponent,
    BgHighLightDirective,
    ShowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
