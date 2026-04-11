import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBycategory',
})
export class FilterBycategoryPipe implements PipeTransform {
  transform(course:any ,category:string):any{
    // console.log(course);
    // console.log(category);
    if(category=="" || category==null || category==undefined){
      return course;
    }
    else{
      let filteredCourse=course.filter((x:any)=>{
      return x.category==category;
    });
    console.log(filteredCourse);
    return filteredCourse;
    }
    
  }
}
