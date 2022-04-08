import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-object-details-dialog',
  templateUrl: './art-object-details-dialog.component.html',
  styleUrls: ['./art-object-details-dialog.component.scss'],
})
export class ArtObjectDetailsDialogComponent implements OnInit {
  @Input() artObject: any;
  constructor() {}

  get imgSrc() {
    return (
      this.artObject?.primaryImageSmall ||
      'https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg'
    );
  }

  ngOnInit(): void {}
}
