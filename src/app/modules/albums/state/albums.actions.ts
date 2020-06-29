import { createAction, props } from "@ngrx/store";
import { Album } from "../../../core/models/album.mode";

export const startLoader = createAction(
    '[Albums] Start Loader'
);

/* ACTIONS FOR FETCHING ALBUMS */

export const fetchAlbumsSuccess = createAction(
    '[Albums] Fetch Albums Success',
    props<{ albums: Album[] }>()
);

export const fetchAlbumsFail = createAction(
    '[Albums] Fetch Albums Fail'
);