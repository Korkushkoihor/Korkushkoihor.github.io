import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HotelsComponent} from './hotels/hotels.component';
import {HotelViewComponent} from './hotel-view/hotel-view.component';
import {AppRoutingModule} from "./app-routing.module";
import {HotelsService} from "./service/hotels.service";

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
