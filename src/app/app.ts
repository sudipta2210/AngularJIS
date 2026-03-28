import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../course.data';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day2');

  //2 Way Data Binding  & If-else
  public name:string="";
  public flag:boolean=false;

  public COURSELST:any=COURSES;
  FnKeyup()
  {
    console.log(this.name);
    if(this.name=="snigdha")
      this.flag=true;
    else 
      this.flag=false;
  }

  //ends here//


}
