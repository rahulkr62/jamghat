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
      title: 'Aangan Day Care',
      location: 'Delhi NCR',
      image: '../../assets/s1.jpg',
      description: 'Providing safe day care, nutrition, and basic education to children of construction workers.',
      activities: ['Nutrition', 'Early Education']
    },
    {
      title: 'Kaushal Vocational Center',
      location: 'Old Delhi',
      image: '../../assets/s2.jpg',
      description: 'Skill development program for youth aged 16-21 focusing on employability.',
      activities: ['Skill Training', 'Job Placement']
    },
    {
      title: 'Street Outreach',
      location: 'Jama Masjid',
      image: '../../assets/s3.jpg',
      description: 'Connecting with children living on streets and linking them to support services.',
      activities: ['Counseling', 'Healthcare']
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
      name: 'Amit Kumar',
      role: 'Director',
      description: 'Leading strategic initiatives and ensuring organizational compliance.',
      image: 'assets/images/team1.jpg'
    },
    {
      name: 'Sneha Gupta',
      role: 'Program Manager',
      description: 'Overseeing project implementation and community outreach.',
      image: 'assets/images/team2.jpg'
    },
    {
      name: 'Rajesh Singh',
      role: 'Finance Officer',
      description: 'Managing financial transparency and statutory audits.',
      image: 'assets/images/team3.jpg'
    }
  ];
}
