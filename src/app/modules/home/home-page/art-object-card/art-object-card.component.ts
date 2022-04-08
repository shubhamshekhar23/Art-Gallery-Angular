import { Component, Input, OnInit } from '@angular/core';
import { ArtObject } from 'src/app/models/artObject.model';
import { mockObjectInDeparment } from '../../../../shared/mockdata/departments.mockdata';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ArtObjectDetailsDialogComponent } from '../art-object-details-dialog/art-object-details-dialog.component';
@Component({
  selector: 'app-art-object-card',
  templateUrl: './art-object-card.component.html',
  styleUrls: ['./art-object-card.component.scss'],
})
export class ArtObjectCardComponent implements OnInit {
  @Input() artObject: ArtObject | undefined;

  constructor(private modalService: NgbModal) {}

  get imgSrc() {
    return (
      this.artObject?.primaryImage ||
      'https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg'
    );
  }

  ngOnInit(): void {}

  openArtDetailsDialog() {
    const modalRef = this.modalService.open(ArtObjectDetailsDialogComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.artObject = this.artObject;
  }
}
