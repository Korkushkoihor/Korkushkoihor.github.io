import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../service/config.service";
import {HotelsService} from "../service/hotels.service";
import {Subscription} from "rxjs/index";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['./hotel-view.component.css']
})
export class HotelViewComponent implements OnInit {

  hotels = [];
  hotel = null;
  id = 0;

  constructor(private configService: ConfigService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.configService.getData().subscribe((res) => {
        this.hotels = res;
        this.setDataForHotel();
      })
    });
  }

  setDataForHotel() {
    if (this.hotels.length && this.id) {
      for (let i = 0; i < this.hotels.length; i++) {
        if (this.hotels[i].ID == this.id) {
          this.hotel = this.hotels[i];
          break;
        }
      }
    }
  }

}
