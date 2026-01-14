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
    // '../../assets/s1.jpg',
    '../../assets/s2.jpg',
    // '../../assets/s3.jpg',
  ];

  onSlide(event: NgbSlideEvent) {
    console.log(event);
  }

  programs = [
    // {
    //   title: "CHILDREN'S HOME",
    //   location: 'Delhi NCR',
    //   image: '../../assets/s1.jpg',
    //   description: 'Jamghat has been running two shelter homes and one day care centre for 77 girls and boys in Old Delhi.',
    //   activities: ['Safe Shelter', 'Early Education', 'Nutrition & Health']
    // },
    {
      title: 'AANGAN DAYCARE',
      location: 'Old Delhi',
      image: '../../assets/s2.jpg',
      description: 'The Daycare centre – Aangan, was started in 2008 and since then has been working directly with the most vulnerable street children.',
      activities: ['Safe Daycare', 'Nutrition & Health']
    },
    {
      title: 'PRAANGAN',
      location: 'Available at Multiple Locations',
      image: '../../assets/s3.jpg',
      description: 'Praangan is our outreach programme that aims to connect with street children and their families.',
      activities: ['Street Outreach', 'Family Connect']
    }
  ];

   financialReports = [
    { name: 'Annual Report FY 2023–24', size: 'PDF · 2.4 MB', link:'../../assets/pdf/Annual Report FY 2023-24.pdf', download:'Annual Report FY 2023-24' },
    { name: 'Audited Financial Statements FY 2023-24', size: 'PDF · 1.8 MB', link:'../../assets/pdf/Audited Financial Statements FY 2023-24.pdf', download:'Annual Report FY 2023-24' },
    { name: 'Audited Financial Statements FY 2024-25', size: 'PDF · 5.6 MB', link:'../../assests/pdf/Audited Financial Statements FY 2024-25.pdf', download:'Audited Financial Statements FY 2024-25' }
  ];

  registrations = [
    { title: 'FCRA Renewed Certificate', validity: 'Valid till 2028', link:'../../assets/pdf/FCRA  Renewal Certificate_2023.pdf', download:'FCRA  Renewal Certificate_2023' },
    { title: 'Registration Certificate', validity: 'Permanent Validity', link:'../../assets/pdf/Registation Certificate.pdf', download:'Registation Certificate' }
  ];

  teamMembers = [
    {
      name: 'Amit K. Sinha',
      role: 'Member / Founder Director',
      // description: 'Leading strategic initiatives and ensuring organizational compliance.',
      image: '../../assets/team/amit.jpg'
    },
    {
      name: 'Javed Usmani',
      role: 'Program Manager',
      // description: 'Overseeing project implementation and community outreach.',
      image: '../../assets/team/javed.jpg'
    },
    {
      name: 'Seema Kumari',
      role: 'Program Manager',
      // description: 'Overseeing project implementation and community outreach.',
      image: '../../assets/team/seema.jpg'
    },
    {
      name: 'Anita Mahato',
      role: 'Program Manager',
      // description: 'Managing financial transparency and statutory audits.',
      image: '../../assets/team/anita.jpg'
    },
    {
      name: 'Durgesh Kushwaha',
      role: 'Finance Manager',
      // description: 'Managing financial transparency and statutory audits.',
      image: '../../assets/team/durgesh.jpg'
    }
  ];
}
