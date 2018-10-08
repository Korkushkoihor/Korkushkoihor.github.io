import {Injectable} from '@angular/core';
import {ConfigService} from "./config.service";
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  hotels = [];
  hotelsSubscription: BehaviorSubject<any[]> = new BehaviorSubject(this.hotels);

  constructor(private configService: ConfigService) {
    this.configService.getData()
      .subscribe(res => {
        this.hotels = res;
        this.hotelsSubscription.next(res);
      });

  }
}
