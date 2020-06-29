import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/albums.reducer';
import { ImagesModalComponent } from './components/images-modal/images-modal.component';


@NgModule({
  declarations: [AlbumsComponent, ImagesModalComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('albums', reducer),
  ]
})
export class AlbumsModule { }
