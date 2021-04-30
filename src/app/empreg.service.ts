import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employereg';


@Injectable({
  providedIn: 'root'
})
export class EmpregService {

  baseURL:string="http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/empregistration.php"

  Empregistration(employereg: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseURL, employereg);
  }

  constructor(private httpClient: HttpClient) { }
}
