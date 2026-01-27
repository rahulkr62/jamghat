import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  constructor(private dialog: MatDialog) { }

  openTeamDialog(member: any) {
    this.dialog.open(TeamDialogComponent, {
      width: '720px',
      maxWidth: '95vw',
      data: member
    });
  }
  boardMembers = [
    {
      name: 'Ms. Jaimala Iyer',
      role: 'President',
      description: `
      Jaimala Iyer (Jaya ) has been exploring the warp and weft of the world of art, learning, and transformation social development and ecological integrity for over two and half decades. She uses interactive and reflective practices based on Design Principles and art processes. She was awarded UNESCO Aschberg bursary to study the Theatre of the Oppressed with Augusto Boal, WISCOMP scholar of peace fellowship. She received USAID and Show of Force - Award of recognition. She has worked with a wide range of institutions building leadership and capacity to combat issues using creative methods and dialogue. She has designed and led various public campaigns on seeds sovereignty, child rights, gender-based violence, anti-plastic, pro-active peacebuilding.

She was the CEO of Pravah a reputed NGO and led the process that set up the National Centre for Children and Youth in Nehru Memorial Museum and Library, a premier public institution in New Delhi. She is associated with a number of organisations and movements as a consultant and/or advisor.

As a theatre director, she has helped develop and stage over 20 major productions and 1000 studio, street, and community performances. Her productions have won Sahitya Kala Parishad best play of the year, been showcased in Edinburgh Fringe Festival, Urdu theatre festival, Shriram summer festival, theatre for truth festival, etc. She has travelled extensively with her performances and as a trainer across India and the world.

She is working as a Guest Faculty with Delhi University, teaching in the Bachelors of Elementary Education program. Currently, she is part of the core team conceptualising and setting up a leadership institute in Panchgani, Maharashtra.
`,
      image: '../../assets/team/jayamala.jpg'
    },
    {
      name: 'Mr. Lokesh Jain',
      role: 'Vice President',
      description: `
      Lokesh Jain, Co-founder of Jamghat has been involved in theatre for the last three and a half decades. He has explored the diverse forms of theatre as a solo performer , “theatre of the oppressed”, “street theatre”, “proscenium theatre”, “non verbal theatre" & "children's theatre" being some of them. During his journey, he has worked with various theatre groups and individuals like “Actone”,Famit, Team, “kanhai lal ji” , Robin Das, NK Sharma, Anamika Haksar and many others. He has trained intensively , obtaining a Diploma in theatre,(Living Theatre Academy) under a pioneer of modern Indian theatre, Shri Ebrahim Alkazi. He has also participated with the international theatre practitioner Sara Jones, Bond street theatre company and Polish theatre director Jerzy Grotowski's team. He has written lyrics, designed and directed several plays that have been staged in NSD’s theatre festival, Indo- Pak Wagah border, various art galleries & educational institutions all over India.

He is a visiting faculty at several colleges of Delhi University and teaches "theatre in education". He is the creative director of the group "Mandala the magic circle”. He also uses theatre as a pedagogy with youth, farmers, women’s groups, environmental groups, and various other organisations.

Aside from theatre, he is passionate about New Fine Arts and avant-garde performance mediums and has curated an exhibition for eminent Indian artist Savi sawarkar. He loves heritage research and is a prominent curator of Delhi's Architect and oral History walks.

Currently he acts, writes dialogues and is doing intensive research for an internationally acclaimed Film which got several national and international awards. He also participated in the Sundance Film festival and was nominated for Oscar awards participation Film from India under the Direction of Anamika haksar ji.
      `,
      image: '../../assets/team/lokesh.jpg'
    },
    {
      name: 'Mr. Ram Kishan',
      role: 'Treasurer',
      description: `
      Ram Kishan works as the Deputy Regional Director- Asia with Mercy Corps. Ram has over 23 years of experience in development and humanitarian sections in India and aboard. He has worked with various national and international organisations performing different roles including heading country programmes in Nigeria, Nepal, Bangladesh and Afghanistan. Ram is an active member of networks such as Climate Action Network South Asia, Sphere India, CAN-I and contributes to the global and regional policy work for climate change and DRR.
      `,
      image: '../../assets/team/ram-kisan.jpg'
    },
    {
      name: 'Mrs. Bharti Ali',
      role: 'Secretary',
      description: `
        Bharti Ali is a development professional and social activist working on issues concerning the rights of women and children for over 28 years. She is one of the Co-Founders and currently the Executive Director of HAQ: Centre for Child Rights, a Delhi based NGO working towards the realisation of human rights for children. She is also the Trustee and President of the Child Rights and Sustainability Trust (CRST), a Bangalore based non-profit focussing on children’s ecological rights and a Member of the Governing Board of Jamghat, a Delhi based NGO working for creating an enabling environment for the growth and development of street and homeless children. While her area of expertise is research, training and advocacy on child protection and justice for children, some of her other critical research has been on involuntary displacement due to development, women’s participation in local self-governance, right to adequate housing for women and children, reproductive health, gender based violence and right to education. She has authored several publications, articles and reports, and developed training and education materials and modules for police academies, judicial academies, National and State Legal Services Authorities, the Lal Bahadur Shastri National Academy of Administration, Tezpur University, UNICEF and other civil society organisations. Bharti has engaged with both Central and State governments in the drafting of laws, policies, plans and programmes for children. She has been part of various government committees and statutory bodies such as the Supreme Court’s Gender Sensitization and Internal Complaints Committee, the Delhi State Legal Services Authority and the NHRC’s NGO Core Group on Child Rights.
      `,
      image: '../../assets/team/bharti.jpg'
    },
    {
      name: 'Mr. Indu Prakash Singh',
      role: 'Member',
      description: `
        Indu Prakash Singh is a human rights defender, sociospiritual activist, poet, author, feminist, TEDX Speaker (IIM Ahmedabad on 10th Jan 2015) and a PRA/ PLA (Participatory Reflection & Action / Participatory Learning & Action / Participatory Rural Appraisal) practitioner / facilitator. He is currently a Consultant with a large number of development organisations. Indu, as of 30th December, 2020 (for a three year term) has been appointed by the GNCTCD (Government of the National Capital Territory) as the CHAIRPERSON of the Asha Kiran Complex, Delhi (Home for the Intellectually Challenged Persons), which houses over 1000 residents and has 568 employees. Indu has been recently made the MEMBER of State Planning Commission, Chhattisgarh and is the part of the Task Force on Social Security, Women Empowerment, Labour Welfare.

Indu started work with the homeless in Delhi from the year 1999, and from 2000 (till May 2003) as the Director of Aashray Adhikar Abhiyan (AAA), a direct initiative of ActionAid India. His role in ActionAid India - International from June 2003, as the National Campaign Coordinator: Peace and Justice (till 2005) / Theme Leader, Urban Poverty, allowed him to expand this work in Delhi to other cities. And he has continued this work till date. His work with the homeless has gone from strength to strength, over the course of many years. The journey started with the use of the word homeless, as opposed to the word houseless used by Census, to homeless persons / people, to homeless citizens to homeless residents to CityMakers.
      `,
      image: '../../assets/team/induprakash.jpg'
    },
    {
      name: 'Mr. Amit Kumar Sinha',
      role: 'Director',
      description: `Amit Kumar Sinha is one of the founders of Jamghat and a committed social worker and theatre practitioner. Born in Siwan, Bihar, he has been based in Delhi since 1999. An alumnus of Delhi University, he holds a Bachelor’s degree in Arts with Political Science, History, and Economics.

      During his university years, Amit became deeply involved in street theatre and social awareness campaigns, overcoming his initial hesitation to perform in public. His participation in large-scale theatre initiatives helped shape his confidence and purpose. A defining moment in his journey came when he worked with street children in a play performed before Prince Charles, which transformed his path from professional theatre to lifelong social service.

      Since 2003–04, Amit has dedicated himself to working with street-connected children through Jamghat, remaining steadfast in his mission to create dignity, opportunity, and lasting change. In 2025, he was also elected General Secretary of Karm Marg Charitable Society, continuing his commitment to strengthening people-centered institutions.`,
      image: '../../assets/team/amit.jpg'
    },
    {
      name: 'Mr. Ajaya Mahajan',
      role: 'Executive Member',
      description: `Mr. Ajaya has been an Environmentalist for over 30 years. He works at grass roots and educational institutions.`,
      image: '../../assets/team/ajaya.jpg'
    }
  ];
  teamMembers = [
    // {
    //   name: 'Amit Kumar Sinha',
    //   role: 'Founder Director',
    //   description: `Amit Kumar Sinha is one of the founders of Jamghat and a committed social worker and theatre practitioner. Born in Siwan, Bihar, he has been based in Delhi since 1999. An alumnus of Delhi University, he holds a Bachelor’s degree in Arts with Political Science, History, and Economics.

    //   During his university years, Amit became deeply involved in street theatre and social awareness campaigns, overcoming his initial hesitation to perform in public. His participation in large-scale theatre initiatives helped shape his confidence and purpose. A defining moment in his journey came when he worked with street children in a play performed before Prince Charles, which transformed his path from professional theatre to lifelong social service.

    //   Since 2003–04, Amit has dedicated himself to working with street-connected children through Jamghat, remaining steadfast in his mission to create dignity, opportunity, and lasting change. In 2025, he was also elected General Secretary of Karm Marg Charitable Society, continuing his commitment to strengthening people-centered institutions.`,
    //   image: '../../assets/team/amit.jpg'
    // },
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
