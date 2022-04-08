import { Component, OnInit } from '@angular/core';
import { DepartmentArtStateService } from 'src/app/services/department-art-state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  get departmentList() {
    return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }

  constructor(public depArtStateService: DepartmentArtStateService) {}

  ngOnInit(): void {
    this.depArtStateService.prepareDepartmentList();
  }
}
