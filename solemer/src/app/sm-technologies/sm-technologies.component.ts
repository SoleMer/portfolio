import { Component, OnInit } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'app-sm-technologies',
  templateUrl: './sm-technologies.component.html',
  styleUrls: ['./sm-technologies.component.scss']
})
export class SmTechnologiesComponent implements OnInit {

  technologies: Technology[] = [
    {
      name : "Java",
      icon : "../../assets/icons/java.svg",
      type : "back"
    },
    {
      name : "Angular",
      icon : "../../assets/icons/angular.svg",
      type : "front"
    },
    {
      name : "TypeScript",
      icon : "../../assets/icons/typescript.svg",
      type : "all"
    },
    {
      name : "CSS",
      icon : "../../assets/icons/css-3.svg",
      type : "front"
    },
    {
      name : "PHP",
      icon : "../../assets/icons/php.svg",
      type : "back"
    },
    {
      name : "HTML",
      icon : "../../assets/icons/html-5.svg",
      type : "front"
    },
    {
      name : "JavaScript",
      icon : "../../assets/icons/java-script.svg",
      type : "all"
    },
    {
      name : "Sass",
      icon : "../../assets/icons/sass.svg",
      type : "front"
    },
    {
      name : "MySQL",
      icon : "../../assets/icons/mysql.svg",
      type : "back"
    },
    {
      name : "GO",
      icon : "../../assets/icons/go-lang.svg",
      type : "back"
    },
    {
      name : "Bootstrap",
      icon : "../../assets/icons/bootstrap.svg",
      type : "front"
    },
  ];

  type: string = "all";

  constructor() { }

  ngOnInit(): void {
  }

  setType(s : string) {
    this.type = s ;
  }

}
