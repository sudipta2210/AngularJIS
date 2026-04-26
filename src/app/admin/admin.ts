import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-service';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  public AdminUserData:any=[];
  constructor(private obj:AdminService){}

  ngOnInit(): void {
    this.obj.getAdminDetails().subscribe((res:any)=>{
      this.AdminUserData=res.data;
      console.log(this.AdminUserData);
    })
  }
}
