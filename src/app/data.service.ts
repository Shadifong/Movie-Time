import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  // getMovieList(): Observable<any[]> {
  //   return interval(3000).flatMap(() => {
  //     return this.http.get<any>(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=2eee7a02d34031fcb952cc446e9e0097`
  //     );
  //   });
  // }
  getMovieList(): Observable<any[]> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/movie?api_key=2eee7a02d34031fcb952cc446e9e0097`
    );
  }

  getSingleMovie(MovieName) {
    return this.http.get(
      `http://www.omdbapi.com/?apikey=255aed79&s=${MovieName}`
    );
  }
}
