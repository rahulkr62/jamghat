import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  pauseOnHover = true;
  pauseOnFocus = false;

  constructor(private dialog: MatDialog) { }


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
      image: '../../assets/aangan/aangan.webp',
      description: 'The Daycare centre – Aangan, was started in 2008 and since then has been working directly with the most vulnerable street children.',
      activities: ['Safe Daycare', 'Nutrition & Health'],
      link: '/aangan-day-care'
    },
    {
      title: 'PRAANGAN',
      location: 'Available at Multiple Locations',
      image: '../../assets/s3.jpg',
      description: 'Praangan is our outreach programme that aims to connect with street children and their families.',
      activities: ['Street Outreach', 'Family Connect'],
      link: '/praangan'
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
      name: 'Amit Kumar Sinha',
      role: 'Founder Director',
      description: `Amit Kumar Sinha is one of the founders of Jamghat and a committed social worker and theatre practitioner. Born in Siwan, Bihar, he has been based in Delhi since 1999. An alumnus of Delhi University, he holds a Bachelor’s degree in Arts with Political Science, History, and Economics.

      During his university years, Amit became deeply involved in street theatre and social awareness campaigns, overcoming his initial hesitation to perform in public. His participation in large-scale theatre initiatives helped shape his confidence and purpose. A defining moment in his journey came when he worked with street children in a play performed before Prince Charles, which transformed his path from professional theatre to lifelong social service.

      Since 2003–04, Amit has dedicated himself to working with street-connected children through Jamghat, remaining steadfast in his mission to create dignity, opportunity, and lasting change. In 2025, he was also elected General Secretary of Karm Marg Charitable Society, continuing his commitment to strengthening people-centered institutions.`,
      image: '../../assets/team/amit.jpg'
    },
    {
      name: 'Durgesh Kushwaha',
      role: 'Finance Manager / HR Admin',
      description: `Durgesh Kushwaha serves as the Finance, HR, and Administration Manager at Jamghat, where he has been contributing for more than a decade. With extensive expertise in finance and accounts management, he plays a vital role in ensuring transparency, accountability, and operational efficiency within the organization.

      He began his professional journey with a 1.5-year article ship at RSMA & Co., where he built a strong foundation in accounting and compliance. Durgesh holds a Master of Commerce (M.Com.) degree from Swami Vivekanand Subharti University, Meerut, Uttar Pradesh.`,
      image: '../../assets/team/durgesh.jpg'
    },
    {
      name: 'Javed Usmani',
      role: 'Program Manager',
      description: `Javed Usmani is a Program Manager at Jamghat (since 2021) with over 8 years of experience in child rights, protection, and development. He specializes in program design and management, team supervision, stakeholder engagement, and livelihood initiatives, with a strong commitment to creating safe, inclusive, and empowering spaces for children in need.

      Starting his journey as a computer trainer, Javed’s dedication and eager-to-learn approach enabled him to take on progressive roles including Coordinator and later Livelihood Manager of Ekjut, Jamghat’s livelihood program supporting destitute women. Since 2021, he has been leading Jamghat’s child-centered programs, ensuring the holistic development of street-connected children in Delhi through education, life skills, and psychosocial support.

      Javed holds a Master’s degree in Social Work from the Central University of Himachal Pradesh and is UGC-NET (Social Work) qualified. His vision is to empower children to become self-sustainable, uphold child rights, and build a society where every child has the opportunity to thrive with dignity and confidence.`,
      image: '../../assets/team/javed.jpg'
    },
    {
      name: 'Seema Kumari',
      role: 'Program Manager',
      description: `Seema holds a Master’s degree in Social Work and started her journey in the development sector over 8 years ago. During this time, she gained valuable experience through internships with organizations such as the Delhi Commission for Protection of Child Rights (DCPCR) and by working with tribal and underprivileged children in Assam and Arunachal Pradesh.

      Since 2018, she has been associated with Jamghat NGO, where she focuses on creating safe spaces, advocating for child rights, and supporting the holistic growth and rehabilitation of street-connected children. These diverse experiences have not only shaped her professional skills but also strengthened her commitment to building inclusive and supportive communities for vulnerable children.`,
      image: '../../assets/team/seema.jpg'
    },
    {
      name: 'Anita Mahato',
      role: 'Program Manager',
      description: `Anita has over 12 years of experience in the social sector, working with Jamghat since 2012, focusing on child-centered programs. She previously led operations at Aanchal Home and Aman Home (Child Care Institutions) and currently oversees two programs: Aangan Day Care Centre and Praangan Center – Takiya Kale Khan. She specializes in child protection, capacity building, and holistic child development, and is an active member of Jamghat’s core team.

      As Presiding Officer of the POSH Committee and an internal member of the Child Protection Committee, Anita promotes safety, ethics, and gender equality. Her approach combines compassion with structured management, ensuring nurturing and supportive environments for children. She is deeply committed to helping children transition from vulnerability to independence through education, vocational training, and psychosocial support.

      Anita’s career began in 2008 at the Nehru Learning Centre, where she designed creative programs integrating art, culture, and outdoor learning. She holds a Master’s degree in Sociology from IGNOU and is fluent in Hindi, English, and Bangla. Outside of work, she enjoys painting, birdwatching, photography, and travelling.`,
      image: '../../assets/team/anita.jpg'
    }
  ];



  openTeamDialog(member: any) {
    this.dialog.open(TeamDialogComponent, {
      width: '720px',
      maxWidth: '95vw',
      data: member
    });
  }


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
