import { Component, Input } from '@angular/core';
import { COURSES } from '../../course.data';
import { Course } from '../model/Course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  //To recieve data from parent
  @Input('dataFromParent')
  fCourse:Course | undefined;
}
