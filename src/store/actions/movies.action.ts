import { Action } from '@ngrx/store';

import { Movies } from '../../app/models/movie.model';

// load Movies
export const LOAD_Movies = '[movies] Load Movies';
export const LOAD_Movies_FAIL = '[movies] Load Movies Fail';
export const LOAD_Movies_SUCCESS = '[movies] Load Movies Success';
export const LOAD_SINGLE_MOVIE = '[movie] Loaded Single Movie';

export class LoadMovies implements Action {
  readonly type = LOAD_Movies;
}

export class LoadMoviesFail implements Action {
  readonly type = LOAD_Movies_FAIL;
  constructor(public payload: any) {}
}

export class LoadMoviesSuccess implements Action {
  readonly type = LOAD_Movies_SUCCESS;
  constructor(public payload: Movies[]) {}
}

export class LoadSingleMovie implements Action {
  readonly type = LOAD_SINGLE_MOVIE;
  constructor(public payload: any) {}
}
// action types
export type MoviesAction =
  | LoadMovies
  | LoadMoviesFail
  | LoadMoviesSuccess
  | LoadSingleMovie;
