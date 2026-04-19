import { Component, Input, Output, EventEmitter } from '@angular/core';
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
 
  //3. define the output decorator
  @Output('OnSelectedCourse')
  //1: create the instance of EventEmiiter Class
  eventEmitter = new EventEmitter<Course>(); //this class is required to send data from child to parent
  FnViewCourse(){
    console.log("Component Level: Button Clicked");
    // console.log(this.fCourse); //send this data to app component

    //2: send the data to parent
    this.eventEmitter.emit(this.fCourse);
  }
}
