import { Component, Renderer2 } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  moon = faMoon
  sun = faSun
  isNightMode = false

  socialNetworks = [
    {
      link: "http://github.com/lenatsi",
      image: faGithub,
      title: "My GitHub profile"
    },
    {
      link: "",
      image: faTwitter,
      title: "Someday here will be placed my Twitter channel"
    },
    {
      link: "",
      image: faGlobeEurope,
      title: "My web site with portfolio"
    },
    {
      link: "",
      image: faLinkedin,
      title: "And my complete CV on LinkedIn"
    }
  ]

  constructor(private renderer: Renderer2) {

  }

  nightMode() {
    this.isNightMode = !this.isNightMode
    if(this.isNightMode) {
      this.renderer.addClass(document.body, 'night');
    } else {
      this.renderer.removeClass(document.body, 'night');
    }
  }

}
