// class.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Class {
  id?: string;
  name: string;
  trainer: string;
  category: string;
  duration: number;
  capacity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private apiUrl = 'http://localhost:3000/classes';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.apiUrl);
  }

  addClass(classData: Class): Observable<Class> {
    return this.http.post<Class>(this.apiUrl, classData);
  }

  updateClass(classId: string, classData: Class): Observable<Class> {
    return this.http.put<Class>(`${this.apiUrl}/${classId}`, classData);
  }

  deleteClass(classId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${classId}`);
  }

  getAnalytics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics`);
  }
}

