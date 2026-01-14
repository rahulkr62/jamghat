import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { MatDialogModule } from '@angular/material/dialog';
import { EramStoriesComponent } from './eram-stories/eram-stories.component';
import { KalamStoriesComponent } from './kalam-stories/kalam-stories.component';
import { RajivStoriesComponent } from './rajiv-stories/rajiv-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    TeamComponent,
    ContactComponent,
    SuccessStoriesComponent,
    MediaCenterComponent,
    AboutComponent,
    CertificationComponent,
    EventsComponent,
    SuccessStoriesDetailComponent,
    DonateComponent,
    OutreachImpactComponent,
    DonationComponent,
    EramStoriesComponent,
    KalamStoriesComponent,
    RajivStoriesComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
