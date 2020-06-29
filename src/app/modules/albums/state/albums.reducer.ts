import { on, createReducer, Action } from "@ngrx/store";
import { AlbumsState } from "../../../core/models/album.mode";
import * as actions from './albums.actions';


const initialState: AlbumsState = {
    loading: false,
    albums: {
        list: null,
        error: false
    }
}

const albumsReducer = createReducer(
    initialState,

    on(actions.startLoader, (state) => {
        return {
            ...state,
            loading: true
        }
    }),

    on(actions.fetchAlbumsSuccess, (state, action) => {
        return {
            ...state,
            albums: {
                list: action.albums,
                error: false
            },
            loading: false
        }
    }),

    on(actions.fetchAlbumsFail, (state) => {
        return {
            ...state,
            albums: {
                list: [],
                error: true
            },
            loading: false
        }
    }),
);

export function reducer(state: AlbumsState | undefined, action: Action) {
    return albumsReducer(state, action);
}