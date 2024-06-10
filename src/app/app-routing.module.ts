import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AssessmentsresultsComponent } from './components/assessmentsresults/assessmentsresults.component';
import { ReportComponent } from './components/report/report.component';
import { ContactusComponent } from './components/contactus/contactus.component';


const routes: Routes = [
  {path:"aboutus",component:AboutusComponent},
  {path:"house",component:HomeComponent},
  {path:"assessment",component:AssessmentsComponent},
  {path:"result",component:AssessmentsresultsComponent},
  {path:"report",component:ReportComponent},
  {path:"contactus",component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
