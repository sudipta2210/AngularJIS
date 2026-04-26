import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../admin-service';



@Component({
  selector: 'app-department',
  imports: [CommonModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit {
  public departmentList: any = [];

  constructor(private adminService: AdminService){}

  //On page load call Get Department Details
  ngOnInit() {
    this.adminService.getDepartment()
    .subscribe((res:any)=>{
      this.departmentList=res.data;
      console.log(this.departmentList);
    });
  }


  getStatusClass(status: string): string {
    return status === 'Active' ? 'status-active' : 'status-inactive';
  }
}
