import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelsComponent} from "./hotels/hotels.component";
import {HotelViewComponent} from "./hotel-view/hotel-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotel-view/:id', component: HotelViewComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
