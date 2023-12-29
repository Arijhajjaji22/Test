// course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des cours depuis le backend
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un nouveau cours
  addCourse(course: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, course);
  }

  // Méthode pour mettre à jour un cours existant
  updateCourse(courseId: number, updatedCourse: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${courseId}`, updatedCourse);
  }

  // Méthode pour supprimer un cours
  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${courseId}`);
  }
}
