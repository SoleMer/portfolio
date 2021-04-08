import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-skills',
  templateUrl: './sm-skills.component.html',
  styleUrls: ['./sm-skills.component.scss']
})
export class SmSkillsComponent implements OnInit {

  selected: string = "tech";

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(s : string) {
    this.selected = s;
  }
}
