import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { AboutComponent } from './about/about.component';
import { CertificationComponent } from './certification/certification.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomepageComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'ourTeam', component:TeamComponent
  },
  {
    path:'certification', component:CertificationComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'events', component:EventsComponent
  },
  {
    path:'success-stories', component:SuccessStoriesComponent
  },
  {
    path:'media-center', component:MediaCenterComponent
  },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
