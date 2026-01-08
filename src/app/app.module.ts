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
    EventsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
