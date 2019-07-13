import * as fromMovies from '../actions/movies.action';
import { Movies } from '../../app/models/movie.model';

export interface Moviestate {
  data: any;
  loaded: boolean;
  loading: boolean;
}
export const initialState: Moviestate = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromMovies.MoviesAction
): Moviestate {
  switch (action.type) {
    case fromMovies.LOAD_Movies: {
      return {
        ...state,
        loading: true
      };
    }

    case fromMovies.LOAD_Movies_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case fromMovies.LOAD_Movies_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getMoviesLoading = (state: Moviestate) => state.loading;
export const getMoviesLoaded = (state: Moviestate) => state.loaded;
export const getMovies = (state: Moviestate) => state.data;
