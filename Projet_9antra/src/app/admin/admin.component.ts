// admin.component.ts

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  courses: any[] = [];
  newCourse: any = { name: '', price: '', image: '' };
  isEditing: boolean = false;
  selectedCourse: any = { id: 0, name: '', price: '', image: '',title:'' };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error loading courses:', error);
      }
    );
  }

  addCourse() {
    this.courseService.addCourse(this.newCourse).subscribe(() => {
      this.newCourse = { name: '', price: '', image: '',title:'' };
      this.loadCourses();
    });
  }

  editCourse(course: any) {
    this.selectedCourse = { ...course };
    this.isEditing = true;
  }

  updateCourse() {
    this.courseService.updateCourse(this.selectedCourse.id, this.selectedCourse).subscribe(
      () => {
        this.selectedCourse = { id: 0, name: '', price: '', image: '' };
        this.isEditing = false;
        this.loadCourses();
      },
      (error) => {
        console.error('Error updating course:', error);
      }
    );
  }

  cancelEdit() {
    this.isEditing = false;
    this.selectedCourse = { id: 0, name: '', price: '', image: '' };
  }

  deleteCourse(courseId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this course?');
    if (confirmDelete) {
      this.courseService.deleteCourse(courseId).subscribe(
        () => {
          this.loadCourses();
        },
        (error) => {
          console.error('Error deleting course:', error);
        }
      );
    }
  }
}
