import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSticky: boolean = false;
   isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage =
          event.urlAfterRedirects === '/' ||
          event.urlAfterRedirects === '/home';

        if (!this.isHomePage) {
          this.isSticky = false;
        }
      }
    });
  }
  isEventActive(): boolean {
    return (
      this.router.isActive('/about', false) ||
      this.router.isActive('/ourTeam', false) ||
      this.router.isActive('/success-stories', false)
    );
  }
  whatEventActive(): boolean {
    return (
      this.router.isActive('/what-we-do', false) ||
      this.router.isActive('/praangan', false) ||
      this.router.isActive('/aangan-day-care', false) ||
      this.router.isActive('/previous-intervention', false) ||
      this.router.isActive('/theatre-nightwalk', false)
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset > 80;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
    // window.scroll(0,0)
  }
}