import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { Album } from '../models/album.mode';
import { Photo } from '../models/photo.model';
import { Observable } from 'rxjs';
import { FETCH_ALBUMS, FETCH_PHOTOS } from '../constants/urls';

@Injectable({
    providedIn: 'root'
})
export class ServicePhotos {

    constructor(private http: HttpClient) { }

    getAlbums(userId: number): Observable<Album[]> {
        return this.http.get(
            FETCH_ALBUMS + userId
        ).pipe(
            mergeMap(
                (albums: Album[]) => {
                    return this.http.get(
                        FETCH_PHOTOS
                    ).pipe(
                        map((photos: Photo[]) => {
                            photos = photos.filter(
                                (photo) => {
                                    let album = albums.find(x => x.id == photo.albumId);
                                    return album ? true : false;
                                }
                            );
                            albums.forEach(
                                (album) => {
                                    album.photos = [];
                                }
                            );
                            photos.forEach(
                                (photo) => {
                                    let album = albums.find(x => x.id == photo.albumId);
                                    album.photos.push(photo);
                                }
                            );
                            return albums;
                        })
                    )
                }
            )
        );
    }

}