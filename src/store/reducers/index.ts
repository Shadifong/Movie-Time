import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromMovies from './movies.reducer';

export interface ProductsState {
  Movies: fromMovies.Moviestate;
}

export const reducers: ActionReducerMap<ProductsState> = {
  Movies: fromMovies.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

// Movies state
export const getMoviestate = createSelector(
  getProductsState,
  (state: ProductsState) => state.Movies
);

export const getAllMovies = createSelector(
  getMoviestate,
  fromMovies.getMovies
);
export const getMoviesLoaded = createSelector(
  getMoviestate,
  fromMovies.getMoviesLoaded
);
export const getMoviesLoading = createSelector(
  getMoviestate,
  fromMovies.getMoviesLoading
);
