import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { DepartmentDetails, Departments } from '../models/department.model';
import { ArtObjectService } from './art-object.service';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentArtStateService {
  departmentList: DepartmentDetails[] = [];
  currentDepLoadIndex = 0;
  currentDepLoadSearchQueryIndex = 0;
  searchQuery = '';

  constructor(
    private artObjectService: ArtObjectService,
    private departmentService: DepartmentService,
    private _httpClient: HttpClient
  ) {}

  prepareDepartmentList() {
    this.departmentService
      .getDepartments()
      .pipe(map((item) => item.departments))
      .subscribe((departments) => {
        this.populateDepartmentList(departments);
        this.populateDataSequentially();
      });
  }

  populateDepartmentList(departments: any) {
    departments.forEach((department: any) => {
      let dep = new DepartmentDetails(
        department.departmentId,
        department.displayName
      );
      this.departmentList?.push(dep);
    });
  }

  populateDataSequentially() {
    if (this.currentDepLoadIndex < this.departmentList.length) {
      this.populateObjectIdsInDepartments(
        this.departmentList && this.departmentList[this.currentDepLoadIndex]
      );
    } else {
      this.currentDepLoadIndex = 0;
    }
  }

  populateObjectIdsInDepartments(department: any) {
    this.departmentService
      .getObjectsInDepartments(department.departmentId)
      .subscribe((res) => {
        department.objectIds = res.objectIDs;
        this.populateObjectDetailsList(department);
      });
  }

  populateObjectDetailsList(department: DepartmentDetails) {
    this.updateObjectDetailsListInDepartment(department).subscribe((result) => {
      department.objectList = [...department.objectList, ...result];
      this.currentDepLoadIndex++;
      this.populateDataSequentially();
    });
  }

  updateObjectDetailsListInDepartment(department: DepartmentDetails) {
    const objectIdsInView = department.objectIds.slice(
      department.lowLimit,
      department.upperLimit
    );
    let callList = objectIdsInView.map((id) =>
      this.artObjectService.getObjectDetails(id)
    );
    return forkJoin(callList);
  }

  fetchExtraArtObjects(department: DepartmentDetails) {
    department.lowLimit = department.upperLimit;
    department.upperLimit = department.upperLimit + 12;
    this.updateObjectDetailsListInDepartment(department).subscribe((result) => {
      department.objectList = [...department.objectList, ...result];
    });
  }

  /* searchquery */

  searchAndFilterArt(searchQuery: any) {
    this.currentDepLoadSearchQueryIndex = 0;
    this.searchQuery = searchQuery;
    this.populateDataSequentiallyForSearchQuery();
  }

  populateDataSequentiallyForSearchQuery() {
    if (this.currentDepLoadSearchQueryIndex < this.departmentList.length) {
      this.populateObjectIdsInDepartmentUsingSearchQuery(
        this.departmentList &&
          this.departmentList[this.currentDepLoadSearchQueryIndex]
      );
    } else {
      this.currentDepLoadSearchQueryIndex = 0;
    }
  }

  populateObjectIdsInDepartmentUsingSearchQuery(department: DepartmentDetails) {
    this._resetDepartmentData(department);
    this.artObjectService
      .searchObject(this.searchQuery, department.departmentId)
      .subscribe((res) => {
        if (res.objectIDs && res.objectIDs[0]) {
          department.objectIds = res.objectIDs;
          this.populateObjectDetailsListUsingSearchQuery(department);
        } else {
          department.objectList = [];
          this.currentDepLoadSearchQueryIndex++;
          this.populateDataSequentiallyForSearchQuery();
        }
      });
  }

  populateObjectDetailsListUsingSearchQuery(department: DepartmentDetails) {
    this.updateObjectDetailsListInDepartment(department).subscribe((result) => {
      department.objectList = [...department.objectList, ...result];
      this.currentDepLoadSearchQueryIndex++;
      this.populateDataSequentiallyForSearchQuery();
    });
  }

  _resetDepartmentData(department: DepartmentDetails) {
    department.lowLimit = 0;
    department.upperLimit = 12;
    department.objectList = [];
    department.objectIds = [];
  }
}
