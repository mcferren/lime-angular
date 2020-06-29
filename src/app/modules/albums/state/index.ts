import { createSelector } from '@ngrx/store';
import { AlbumsState } from '../../../core/models/album.mode';

export class RootState {
    albums: AlbumsState;
}

export const selectAlbumsFeature = (state: RootState) => state.albums;

/* CREATING SELECTORS */

export const selectLoader = createSelector(
    selectAlbumsFeature,
    (state) => {
        return state.loading;
    }
);

export const selectAlbums = createSelector(
    selectAlbumsFeature,
    (state) => {
        return state.albums;
    }
);