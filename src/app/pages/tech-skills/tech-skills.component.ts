import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent {
  progress1 = 50; // Define o progresso inicial da primeira barra
  imageAngular = 'assets/angular-icon.svg'
  updateProgress1() {
    this.progress1 += 10;
  }
}
