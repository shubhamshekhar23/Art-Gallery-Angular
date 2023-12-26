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
      if (this.searchText) {
        this.departmentArtStateService.searchAndFilterArt(this.searchText);
      } else {
        this.departmentArtStateService.prepareDepartmentList();
      }
    }, 1000);
  }
}
