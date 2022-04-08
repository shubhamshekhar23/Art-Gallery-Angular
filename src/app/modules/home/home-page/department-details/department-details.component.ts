import { Component, OnInit } from '@angular/core';
import { mockDepartments } from '../../../../shared/mockdata/departments.mockdata';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss'],
})
export class DepartmentDetailsComponent implements OnInit {
  constructor() {}

  get department() {
    return mockDepartments[0];
  }

  get artObjectList() {
    return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }

  ngOnInit(): void {}
}
