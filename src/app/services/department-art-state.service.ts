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
}
