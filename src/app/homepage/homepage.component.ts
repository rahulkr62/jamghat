import { Component } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 pauseOnHover = true;
  pauseOnFocus = false;

  images = [
    '../../assets/s1.jpg',
    '../../assets/s2.jpg',
    '../../assets/s3.jpg',
  ];

  onSlide(event: NgbSlideEvent) {
    console.log(event);
  }

  programs = [
    {
      title: "CHILDREN'S HOME",
      location: 'Delhi NCR',
      image: '../../assets/s1.jpg',
      description: 'Jamghat has been running two shelter homes and one day care centre for 77 girls and boys in Old Delhi.',
      activities: ['Safe Shelter', 'Early Education', 'Nutrition & Health']
    },
    {
      title: 'AANGAN DAYCARE',
      location: 'Old Delhi',
      image: '../../assets/s2.jpg',
      description: 'The Daycare centre – Aangan, was started in 2008 and since then has been working directly with the most vulnerable street children.',
      activities: ['Safe Daycare', 'Nutrition & Health']
    },
    {
      title: 'PRAANGAN',
      location: 'Jama Masjid',
      image: '../../assets/s3.jpg',
      description: 'Praangan is our outreach programme that aims to connect with street children and their families.',
      activities: ['Street Outreach', 'Family Connect']
    }
  ];

   financialReports = [
    { name: 'Audited Financial Statement 2023-24', size: 'PDF · 2.4 MB' },
    { name: 'FCRA Annual Return 2023-24', size: 'PDF · 1.8 MB' },
    { name: 'Annual Activity Report 2023-24', size: 'PDF · 5.6 MB' }
  ];

  registrations = [
    { title: 'FCRA Registration', validity: 'Valid till 2028' },
    { title: '12A & 80G Certificate', validity: 'Permanent Validity' }
  ];

  teamMembers = [
    {
      name: 'Amit K. Sinha',
      role: 'Member / Founder Director',
      description: 'Leading strategic initiatives and ensuring organizational compliance.',
      image: '../../assets/team/amit.jpg'
    },
    {
      name: 'Manoj',
      role: 'Program Head',
      description: 'Overseeing project implementation and community outreach.',
      image: '../../assets/team/manoj.jpg'
    },
    {
      name: 'Anita Mahato',
      role: 'Program Manager',
      description: 'Managing financial transparency and statutory audits.',
      image: '../../assets/team/anita.jpg'
    },
    {
      name: 'Durgesh Kushwaha',
      role: 'Finance Manager',
      description: 'Managing financial transparency and statutory audits.',
      image: '../../assets/team/durgesh.jpg'
    }
  ];
}
