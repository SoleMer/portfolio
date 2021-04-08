import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-soft-skills',
  templateUrl: './sm-soft-skills.component.html',
  styleUrls: ['./sm-soft-skills.component.scss']
})
export class SmSoftSkillsComponent implements OnInit {

  skills : string[] = [    
    "Team and collaborative work.",
    "Conflict resolution.",
    "Decision making.",
    "Adaptation to change.",
    "Good communication.",
    "Proactivity.",
    "Initiative.",
    "Entrepreneurial sense.",
    "Creative thinking.",
    "Ethical values.",
    "Planning",
    "Integration of content and with coworkers.",
    "Respect.",
    "Work under pressure."
  ];
  ss: string = "";

  constructor() { }

  ngOnInit(): void {
    this.changeSkills();
  }

  changeSkills() {
    this.skills.forEach(s => {
      this.ss = s;
      setTimeout(() => {
        this.changeSkills();
      }, 4000);
    });
  }

}
