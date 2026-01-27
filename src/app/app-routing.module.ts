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
import { SuccessStoriesDetailComponent } from './success-stories-detail/success-stories-detail.component';
import { DonateComponent } from './donate/donate.component';
import { OutreachImpactComponent } from './outreach-impact/outreach-impact.component';
import { DonationComponent } from './donation/donation.component';
import { EramStoriesComponent } from './eram-stories/eram-stories.component';
import { KalamStoriesComponent } from './kalam-stories/kalam-stories.component';
import { RajivStoriesComponent } from './rajiv-stories/rajiv-stories.component';
import { AanganDaycareComponent } from './aangan-daycare/aangan-daycare.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { PraanganComponent } from './praangan/praangan.component';
import { TheatreNightwalkComponent } from './theatre-nightwalk/theatre-nightwalk.component';
import { PreviousInterventionsComponent } from './previous-interventions/previous-interventions.component';

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
    path:'what-we-do', component:WhatWeDoComponent
  },
  {
    path:'outreach-impact', component:OutreachImpactComponent
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
    path:'eram-stories', component:EramStoriesComponent
  },
  {
    path:'kalam-stories', component:KalamStoriesComponent
  },
  {
    path:'rajiv-stories', component:RajivStoriesComponent
  },
  {
    path:'success-stories-detail', component:SuccessStoriesDetailComponent
  },
  {
    path:'media-center', component:MediaCenterComponent
  },
  {
    path:'donate', component:DonateComponent
  },
  {
    path:'donation', component:DonationComponent
  },
  {
    path:'aangan-day-care', component:AanganDaycareComponent
  },
  {
    path:'praangan', component:PraanganComponent
  },
  {
    path:'theatre-nightwalk', component:TheatreNightwalkComponent
  },
  {
    path:'previous-intervention', component:PreviousInterventionsComponent
  },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
