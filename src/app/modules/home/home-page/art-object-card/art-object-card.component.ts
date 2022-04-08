import { Component, Input, OnInit } from '@angular/core';
import { ArtObject } from 'src/app/models/artObject.model';
import { mockObjectInDeparment } from '../../../../shared/mockdata/departments.mockdata';

@Component({
  selector: 'app-art-object-card',
  templateUrl: './art-object-card.component.html',
  styleUrls: ['./art-object-card.component.scss'],
})
export class ArtObjectCardComponent implements OnInit {
  @Input() artObject: ArtObject | undefined;

  constructor() {}

  get imgSrc() {
    return (
      this.artObject?.primaryImageSmall ||
      'https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg'
    );
  }

  ngOnInit(): void {}
}
