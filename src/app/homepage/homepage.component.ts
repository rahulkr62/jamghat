import { Component } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  pauseOnHover = true;
  pauseOnFocus = false;

  images = [
    '../../assets/kingCharles.jpg',
    '../../assets/s2.jpg',
    '../../assets/s4.jpg',
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
      location: 'Jama Masjid',
      image: '../../assets/s2.jpg',
      description: 'The Daycare centre – Aangan, was started in 2008 and since then has been working directly with the most vulnerable street children.',
      activities: ['Safe Daycare', 'Nutrition & Health'],
      link:'/aangan-day-care'
    },
    {
      title: 'PRAANGAN',
      location: 'Available at Multiple Locations',
      image: '../../assets/s3.jpg',
      description: 'Praangan is our outreach programme that aims to connect with street children and their families.',
      activities: ['Street Outreach', 'Family Connect'],
      link:'/praangan'
    }
  ];

  financialReports = [
    { name: 'Annual Report FY 2023–24', size: 'PDF · 2.4 MB', link: '../../assets/pdf/Annual Report FY 2023-24.pdf', download: 'Annual Report FY 2023-24' },
    { name: 'Audited Financial Statements FY 2023-24', size: 'PDF · 1.8 MB', link: '../../assets/pdf/Audited Financial Statements FY 2023-24.pdf', download: 'Annual Report FY 2023-24' },
    { name: 'Audited Financial Statements FY 2024-25', size: 'PDF · 5.6 MB', link: '../../assests/pdf/Audited Financial Statements FY 2024-25.pdf', download: 'Audited Financial Statements FY 2024-25' }
  ];

  registrations = [
    { title: 'FCRA Renewed Certificate', validity: 'Valid till 2028', link: '../../assets/pdf/FCRA  Renewal Certificate_2023.pdf', download: 'FCRA  Renewal Certificate_2023' },
    { title: 'Registration Certificate', validity: 'Permanent Validity', link: '../../assets/pdf/Registation Certificate.pdf', download: 'Registation Certificate' }
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


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  }

  sliderImg = [
    {
      img: '../../assets/supporters/1.jpg'
    },
    {
      img: '../../assets/supporters/2.jpg'
    },
    {
      img: './../assets/supporters/3.jpg'
    },
    {
      img: './../assets/supporters/4.jpg'
    },
    {
      img: './../assets/supporters/5.jpg'
    },
    {
      img: './../assets/supporters/6.jpg'
    },
    {
      img: './../assets/supporters/7.jpg'
    },
    {
      img: './../assets/supporters/8.jpg'
    },
    {
      img: './../assets/supporters/9.jpg'
    },
    {
      img: './../assets/supporters/10.jpg'
    },
    {
      img: './../assets/supporters/11.jpg'
    },
  ]

}
