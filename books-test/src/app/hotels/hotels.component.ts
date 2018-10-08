import {Component, OnDestroy, OnInit} from '@angular/core';
import {HotelsService} from "../service/hotels.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit, OnDestroy {
  hotels = [];
  hotelsSubscription: Subscription = null;


  constructor(private hotelsService: HotelsService) {
  }

  ngOnInit() {
    this.hotelsSubscription = this.hotelsService.hotelsSubscription.subscribe((arr) => {

      arr = arr.map(hotel => {
        let images = hotel.Images.map(image => {
          if (image.indexOf('_cropped_370_240') <= 0) {
            image = image.slice(0, image.lastIndexOf('.')) +
              "_cropped_370_240" + image.slice(image.lastIndexOf('.'));
          }
          return image;
        });
        hotel.Images = images;

        return hotel;
      });
      this.hotels = arr;
    });
  }

  ngOnDestroy() {
    if (this.hotelsSubscription) {
      this.hotelsSubscription.unsubscribe();
    }
  }
}
