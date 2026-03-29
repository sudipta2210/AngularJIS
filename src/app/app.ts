import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../course.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit,OnDestroy {
  protected readonly title = signal('courseproj');
  public courseList:any;
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
}
