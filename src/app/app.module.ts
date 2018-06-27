import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigComponent } from './app/big/big.component';
import { SmallComponent } from './app/big/small/small.component';

@NgModule({
  declarations: [
    AppComponent,
    BigComponent,
    SmallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
