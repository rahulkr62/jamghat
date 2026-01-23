import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
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
  // teamMembers = [
  //   {
  //     name: 'Amit K. Sinha',
  //     role: 'Member / Founder Director',
  //     description: 'Leading strategic initiatives and ensuring organizational compliance.',
  //     image: '../../assets/team/amit.jpg'
  //   },
  //   {
  //     name: 'Manoj',
  //     role: 'Program Head',
  //     description: 'Overseeing project implementation and community outreach.',
  //     image: '../../assets/team/manoj.jpg'
  //   },
  //   {
  //     name: 'Anita Mahato',
  //     role: 'Program Manager',
  //     description: 'Managing financial transparency and statutory audits.',
  //     image: '../../assets/team/anita.jpg'
  //   },
  //   {
  //     name: 'Durgesh Kushwaha',
  //     role: 'Finance Manager',
  //     description: 'Managing financial transparency and statutory audits.',
  //     image: '../../assets/team/durgesh.jpg'
  //   }
  // ];
}
