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
