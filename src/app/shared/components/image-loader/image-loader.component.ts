import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
})
export class ImageLoaderComponent implements OnInit, AfterViewInit {
  @Input() imageUrl: string = '';
  @Input() id: number | any = 0;
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.loadImage();
  }

  ngAfterViewInit(): void {
    this.loadImage();
  }

  get imageId() {
    return this.id + '_' + 'hdImage';
  }

  get loaderId() {
    return this.id + '_' + 'loader';
  }

  loadImage(): void {
    const imageElement = document.getElementById(
      this.imageId
    ) as HTMLImageElement;
    const loaderElement = document.getElementById(
      this.loaderId
    ) as HTMLImageElement;

    const image = new Image();
    image.onload = () => {
      this.loading = false;
      imageElement.src = this.imageUrl;
      if (loaderElement) loaderElement.style.display = 'none';
    };

    image.src = this.imageUrl;
  }
}
