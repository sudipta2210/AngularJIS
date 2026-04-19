import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive } from '@angular/router';
import { COURSES } from '../course.data';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { FilterBycategoryPipe } from './filter-bycategory-pipe';
import { CourseCard } from "./course-card/course-card";
@Component({
  selector: 'app-root',
  imports: [FormsModule, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit,OnDestroy {
  protected readonly title = signal('courseproj');
  public courseList:any;

  // public FirstCourse=COURSES[0];
  // public SecCourse=COURSES[1];
  // public ThirdCourse=COURSES[2];

  public selectedCat:string="";
  public strDate=new Date(2026,3,11);
  public curr:any=100;


  
  //Life Cycle Hooks
  constructor(){
    console.log("Constructor is called");
    this.courseList=[];
  }

  ngOnInit(): void {
    console.log("ngOninit called");
    this.courseList=COURSES;
  }

  ngOnDestroy(): void {
    console.log("ngOndestroy Called");
  }
  FnShowCat()
  {
    console.log(this.selectedCat);
  }

  FnOnCourseSelected(event:any){
    console.log("App Component Level: Button Clicked");
    console.log(event);
  }
}
