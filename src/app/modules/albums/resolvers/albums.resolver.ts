import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../state/index';
import * as actions from '../state/albums.actions';
import { ServicePhotos } from 'src/app/core/services/photos.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AlbumsResolverService implements Resolve<Observable<any>>  {

    constructor(
        private store: Store<RootState>,
        private photosService: ServicePhotos
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const { id } = route.params; 
        return this.photosService.getAlbums(id).pipe(
            tap((response) => {
                this.store.dispatch(actions.fetchAlbumsSuccess({ albums: response }));
            })
        );
    }
}