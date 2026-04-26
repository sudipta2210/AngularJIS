import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'https://localhost:7187/admin/signup';

  constructor(private http: HttpClient) {}

  signup(emailId: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('emailId', emailId)
      .set('password', password);

    return this.http.post<any>(this.apiUrl, params);
  }

  getDepartment()
  {
    // const token = localStorage.getItem('Mytoken');
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // }); //adding token to the header of api call
    return this.http.get<any>("https://localhost:7187/admin/GetDepartmentDetails");
  }

  getAdminDetails()
  {
    //  const token = localStorage.getItem('Mytoken');
    //  const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    //  }); //adding token to the header of api call
     return this.http.get<any>("https://localhost:7187/admin/GetAdmindetails");
  }
}
