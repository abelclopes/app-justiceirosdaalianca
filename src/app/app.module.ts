import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { ShareadModule } from './sharead/sharead.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
    ,ShareadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
