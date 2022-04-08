import { Component, OnInit } from '@angular/core';
import { mockDepartments } from '../../../../shared/mockdata/departments.mockdata';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss'],
})
export class DepartmentDetailsComponent implements OnInit {
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
}
