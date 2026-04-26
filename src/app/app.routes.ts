import { Routes } from '@angular/router';
import { Singup } from './singup/singup';
import { Department } from './department/department';
import { authGuard } from './auth.guard';
import { Admin } from './admin/admin';
import { Teacher } from './teacher/teacher';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Singup },
  { path: 'signup', component: Singup },
  { path: 'department', component: Department, canActivate: [authGuard] },
  {path:  'admin',component:Admin,canActivate:[authGuard]},
  {path:  'teacher',component:Teacher,canActivate:[authGuard]}
];
