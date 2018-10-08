import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {catchError, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  booksUrl = 'http://api.meetingplannerguide.com/api/profiles/profilefilter';

// {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// }

  const
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {

  }

  getData(): Observable<any> {
    return this.http.post<any>(this.booksUrl, {
        NumberOfHotelRooms: 0,
        NumberOfParticipants: null,
        ProfileType: "hotels",
        SizeOfLargestMeetingRoom: [0, 1000],
        SpecialFilter: "",
        ToAirport: [0, 51],
        ToCityCenter: [0, 51]
      }, this.httpOptions
    )
  }
}
