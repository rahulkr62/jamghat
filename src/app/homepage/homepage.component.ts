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
}
