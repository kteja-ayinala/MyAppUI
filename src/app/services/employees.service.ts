import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from "src/app/components/employees/models/employee.model"
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseApiUrl + '/api/tenant')
  }
}
