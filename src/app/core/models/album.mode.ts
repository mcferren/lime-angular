import { Photo } from './photo.model';

export class Album {
    userId: number;
    id: number;
    title: string;
    photos: Photo[];
}

export interface AlbumsState {
    albums: {
        list: Album[];
        error: boolean;
    }
    loading: boolean;
}