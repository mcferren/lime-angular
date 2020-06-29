import { Component, OnInit, Inject } from '@angular/core';
import { Photo } from 'src/app/core/models/photo.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-images-modal',
  templateUrl: './images-modal.component.html',
  styleUrls: ['./images-modal.component.scss']
})
export class ImagesModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public photos: Photo[]) { }

  ngOnInit(): void {
  }

}
