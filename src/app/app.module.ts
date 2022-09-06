import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { ProfileComponent } from './features/profile/profile.component';
import { ProfileEditComponent } from './features/profile-edit/profile-edit.component';
import { TeamComponent } from './features/team/team.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { TeamaddmemberComponent } from './features/teamaddmember/teamaddmember.component';
import { TeamremovememberComponent } from './features/teamremovemember/teamremovemember.component';
import { ProjectComponent } from './features/project/project.component';
import { AddprojectComponent } from './features/addproject/addproject.component';
import { RemoveprojectComponent } from './features/removeproject/removeproject.component';
import { AddmemberprojectComponent } from './features/addmemberproject/addmemberproject.component';
import { UpdateprojectComponent } from './features/updateproject/updateproject.component';
import { TimesheetComponent } from './features/timesheet/timesheet.component';
import { AttendanceComponent } from './features/attendance/attendance.component';
import { TimesheetDaywiseComponent } from './features/timesheet-daywise/timesheet-daywise.component';
import { TimesheetMonthwiseComponent } from './features/timesheet-monthwise/timesheet-monthwise.component';
import { TimesheetWeekwiseComponent } from './features/timesheet-weekwise/timesheet-weekwise.component';
import { TimesheetYearwiseComponent } from './features/timesheet-yearwise/timesheet-yearwise.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
    ProfileEditComponent,
    TeamComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    TeamaddmemberComponent,
    TeamremovememberComponent,
    ProjectComponent,
    AddprojectComponent,
    RemoveprojectComponent,
    AddmemberprojectComponent,
    UpdateprojectComponent,
    TimesheetComponent,
    AttendanceComponent,
    TimesheetDaywiseComponent,
    TimesheetMonthwiseComponent,
    TimesheetWeekwiseComponent,
    TimesheetYearwiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
