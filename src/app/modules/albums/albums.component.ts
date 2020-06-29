import { Component, OnInit } from '@angular/core';
import * as fromAlbumsActions from './state/albums.actions';
import * as fromAlbumsState from './state';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { RootState } from './state/';
import { Album } from 'src/app/core/models/album.mode';
import { ImagesModalComponent } from './components/images-modal/images-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  loading$: Observable<boolean>;
  albums$: Observable<{ list: Album[]; error: boolean; }>
  ascending: boolean = null;

  columnsList = [
    'id',
    'title',
    'photos',
    'view'
  ]

  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {

    this.loading$ = this.store.pipe(select(fromAlbumsState.selectLoader));
    this.albums$ = this.store.pipe(select(fromAlbumsState.selectAlbums));

  }

  onSortAsc() {
    this.ascending = true;
  }

  onSortDesc() {
    this.ascending = false;
  }

  getAlbums(albums: Album[]) {
    if (albums) {
      let list = [...albums];
      if (this.ascending == null) {
        return list;
      } else {
        list = list.sort(
          (first, second) => {
            if (this.ascending) {
              return (first.title > second.title) ? 1 : -1;
            } else {
              return (first.title < second.title) ? 1 : -1;
            }
          }
        );
        return list;
      }
    }
  }

  onViewPhotos(album: Album) {
    this.matDialog.open(ImagesModalComponent, {
      data: album.photos,
      width: '750px',
      maxHeight: '90vh'
    })
  }

}
