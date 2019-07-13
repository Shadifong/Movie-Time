import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, interval, timer } from 'rxjs';
import * as moveActions from '../actions/movies.action';
import * as fromServices from '../../app/data.service';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: fromServices.DataService
  ) {}

  @Effect()
  loadMovies$ = this.actions$.pipe(ofType(moveActions.LOAD_Movies)).pipe(
    switchMap(() => {
      return this.movieService.getMovieList().pipe(
        map(movies => new moveActions.LoadMoviesSuccess(movies)),
        catchError(error => of(console.log(error)))
      );
    })
  );
}
