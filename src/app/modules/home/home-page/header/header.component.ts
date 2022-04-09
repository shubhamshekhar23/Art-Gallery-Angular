import { Component, OnInit } from '@angular/core';
import { DepartmentArtStateService } from 'src/app/services/department-art-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText = '';
  timeCheck: any = null;
  constructor(public departmentArtStateService: DepartmentArtStateService) {}

  ngOnInit(): void {}

  searchAndFilterArt() {
    if (this.timeCheck) {
      clearTimeout(this.timeCheck);
    }
    this.timeCheck = setTimeout(() => {
      this.departmentArtStateService.searchAndFilterArt(this.searchText);
    }, 500);
  }
}
