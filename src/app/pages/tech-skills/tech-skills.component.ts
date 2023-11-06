import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent {
  progress1 = 82;
  progress2 = 75;
  progress3 = 65;
  progress4 = 55;
  progress5 = 45;
  imageAngular = 'assets/angular-icon.svg'
  imageCSS = 'assets/css-icon.svg'
  imageTypescript = 'assets/typescript--icon.svg'
  imageJavascript = 'assets/javascript-icon.svg'
  imageHtml = 'assets/html-icon.svg'
  updateProgress1() {
    this.progress1 += 10;
    this.progress2 += 10;
    this.progress3 += 10;
    this.progress4 += 10;
    this.progress5 += 10;
  }
}
