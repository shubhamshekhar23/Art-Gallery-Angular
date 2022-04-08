import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { mockDepartments } from '../../../../shared/mockdata/departments.mockdata';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss'],
})
export class DepartmentDetailsComponent implements OnInit {
  @ViewChild('scrollableDiv') scrollableDiv: ElementRef | undefined;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor() {}

  get department() {
    return mockDepartments[0];
  }

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
  }
}
