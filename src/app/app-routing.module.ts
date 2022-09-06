import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { LoginComponent } from './features/login/login.component';
import { ProfileComponent } from './features/profile/profile.component';
import { TeamComponent } from './features/team/team.component';
import { TeamaddmemberComponent } from './features/teamaddmember/teamaddmember.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TeamremovememberComponent } from './features/teamremovemember/teamremovemember.component';
import { ProjectComponent } from './features/project/project.component';
import { AddprojectComponent } from './features/addproject/addproject.component';
import { RemoveprojectComponent } from './features/removeproject/removeproject.component';
import { AddmemberprojectComponent } from './features/addmemberproject/addmemberproject.component';
import { UpdateprojectComponent } from './features/updateproject/updateproject.component';
import { TimesheetComponent } from './features/timesheet/timesheet.component';
import { AttendanceComponent } from './features/attendance/attendance.component';
import { ProfileEditComponent } from './features/profile-edit/profile-edit.component';
import { TimesheetDaywiseComponent } from './features/timesheet-daywise/timesheet-daywise.component';
import { TimesheetWeekwiseComponent } from './features/timesheet-weekwise/timesheet-weekwise.component';
import { TimesheetMonthwiseComponent } from './features/timesheet-monthwise/timesheet-monthwise.component';
import { TimesheetYearwiseComponent } from './features/timesheet-yearwise/timesheet-yearwise.component';
import { AttendanceMonthComponent } from './features/attendance-month/attendance-month.component';
import { AttendanceYearComponent } from './features/attendance-year/attendance-year.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path:'profileedit',
        component:ProfileEditComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'addmember',
        component:TeamaddmemberComponent
      },
      {
        path: 'removemember',
        component:TeamremovememberComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path:'addproject',
        component: AddprojectComponent
      },
      {
        path:'removeproject',
        component:RemoveprojectComponent
      },
      {
        path:'addmemproject',
        component:AddmemberprojectComponent
      },
      {
        path:'updateproject',
        component:UpdateprojectComponent
      },
      {
        path:'timesheet',
        component:TimesheetComponent
      },
      {
        path:'day',
        component:TimesheetDaywiseComponent
      },
      {
        path:'week',
        component:TimesheetWeekwiseComponent
      },
      {
        path:'month',
        component:TimesheetMonthwiseComponent
      },
      {
        path:'year',
        component:TimesheetYearwiseComponent
      },
      {
        path:'attendance',
        component:AttendanceComponent
      },
      {
        path:'months',
        component:AttendanceMonthComponent
      },
      {
        path:'years',
        component:AttendanceYearComponent
      }
    ]
  },
 
  {
    path:"**",
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
