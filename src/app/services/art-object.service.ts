import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Departments, ObjectInDepartment } from '../models/department.model';
import { ArtObject } from '../models/artObject.model';

@Injectable({
  providedIn: 'root',
})
export class ArtObjectService {
  BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

  constructor(private _httpClient: HttpClient) {}

  getObjectDetails(objectId: any): Observable<ArtObject> {
    return this._httpClient.get<ArtObject>(
      this.BASE_URL + `/objects/${objectId}`
    );
  }

  searchObject(queryString: any): Observable<ObjectInDepartment> {
    return this._httpClient.get<ObjectInDepartment>(
      this.BASE_URL + `/search?q=${queryString}`
    );
  }
}
