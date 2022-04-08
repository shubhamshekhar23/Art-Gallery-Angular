import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Departments, ObjectInDepartment } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

  constructor(private _httpClient: HttpClient) {}

  getDepartments(): Observable<Departments> {
    return this._httpClient.get<Departments>(this.BASE_URL + `/departments`);
  }

  getObjectsInDepartments(depId: any): Observable<ObjectInDepartment> {
    return this._httpClient.get<ObjectInDepartment>(
      this.BASE_URL + `/objects?departmentIds=${depId}`
    );
  }
}
