import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent {
  progress1 = 55;
  progress2 = 55;
  imageAngular = 'assets/angular-icon.svg'
  imageTypescript = 'assets/typescript--icon.svg'
  updateProgress1() {
    this.progress1 += 10;
    this.progress2 += 10;
  }
}
