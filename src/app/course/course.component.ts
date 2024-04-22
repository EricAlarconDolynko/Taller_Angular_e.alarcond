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

  getCourseList(): Array<Course> {
    return dataCourses;
  }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  ngOnInit() {
    this.getCourses();
  }
}

