import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  courses: Array<Course> = [];
  promedio: number = 0;

  getCourseList(): Array<Course> {
    return dataCourses;
  }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.calculatePromedio(courses);
    });
  }

  calculatePromedio(courses: Array<Course>) {
    this.promedio = 0;
    courses.forEach(course => {
      this.promedio += course.seasons;
    });
    this.promedio /= this.courses.length;
  }

  ngOnInit() {
    this.getCourses();
  }
}

