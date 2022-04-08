import { ArtObject } from './artObject.model';

export interface Department {
  departmentId: number;
  displayName: string;
}

export interface Departments {
  departments: Department[];
}

export interface ObjectInDepartment {
  total: number;
  objectIDs: number[];
}

export class DepartmentDetails {
  departmentId: number;
  displayName: string;
  objectIds: number[];
  lowLimit: number;
  upperLimit: number;
  objectList: ArtObject[];

  constructor(departmentId: number, displayName: string) {
    this.departmentId = departmentId;
    this.displayName = displayName;
    this.objectIds = [];
    this.lowLimit = 0;
    this.upperLimit = 12;
    this.objectList = [];
  }
}
