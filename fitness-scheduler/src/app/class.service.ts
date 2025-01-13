import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private apiUrl = 'http://localhost:3000/classes'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getClasses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addClass(classData: any): Observable<any> {
    return this.http.post(this.apiUrl, classData);
  }

  updateClass(classId: string, classData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${classId}`, classData);
  }

  deleteClass(classId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${classId}`);
  }

  getAnalytics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics`); // Flask endpoint for analytics
  }
}
