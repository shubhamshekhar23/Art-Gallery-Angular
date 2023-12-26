import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { mockDepartments } from '../../../../shared/mockdata/departments.mockdata';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { DepartmentDetails } from 'src/app/models/department.model';
import { DepartmentArtStateService } from 'src/app/services/department-art-state.service';
import { ArtObjectDetailsDialogComponent } from '../art-object-details-dialog/art-object-details-dialog.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ArtObject } from 'src/app/models/artObject.model';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss'],
})
export class DepartmentDetailsComponent implements OnInit {
  @ViewChild('scrollableDiv') scrollableDiv: ElementRef | undefined;
  @Input() department: DepartmentDetails | any;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor(
    public depArtStateService: DepartmentArtStateService,
    private modalService: NgbModal
  ) {}

  get artObjectList() {
    return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }

  ngOnInit(): void {}

  getWidthOfScrollableView(): any {
    return this.scrollableDiv?.nativeElement?.getBoundingClientRect()?.width;
  }

  leftClick() {
    this.scrollableDiv?.nativeElement?.scrollBy({
      left: -1 * this.getWidthOfScrollableView(),
      top: 0,
      behavior: 'smooth',
    });
  }

  rightClick() {
    this.scrollableDiv?.nativeElement?.scrollBy({
      left: this.getWidthOfScrollableView(),
      top: 0,
      behavior: 'smooth',
    });
    this.depArtStateService.fetchExtraArtObjects(this.department);
  }

  openArtDetailsDialog(item: ArtObject) {
    const modalRef = this.modalService.open(ArtObjectDetailsDialogComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.artObject = item;
  }
}
