import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  imports: [CommonModule],
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(albumId).subscribe((data) => {
      this.photos = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
