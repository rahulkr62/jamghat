import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { MediaCenterComponent } from './media-center/media-center.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomepageComponent
  },
  {
    path:'ourTeam', component:TeamComponent
  },
  {
    path:'contact', component:ContactComponent
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
