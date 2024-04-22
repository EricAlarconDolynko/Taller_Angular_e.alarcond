import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = environment.baseUrl + 'courses.json';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
}