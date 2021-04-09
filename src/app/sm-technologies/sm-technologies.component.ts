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
      name : "Postman",
      icon : "../../assets/icons/postman.png",
      type : "tools"
    },
    {
      name : "TypeScript",
      icon : "../../assets/icons/typescript.svg",
      type : "tools"
    },
    {
      name : "Git",
      icon : "../../assets/icons/git.svg",
      type : "tools"
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
      name : "Bootstrap",
      icon : "../../assets/icons/bootstrap.svg",
      type : "tools"
    },
    {
      name : "JavaScript",
      icon : "../../assets/icons/java-script.svg",
      type : "tools"
    },
    {
      name : "MySQL",
      icon : "../../assets/icons/mysql.svg",
      type : "back"
    },
    {
      name : "Sass",
      icon : "../../assets/icons/sass.svg",
      type : "front"
    },
    {
      name : "Webpack",
      icon : "../../assets/icons/webpack.svg",
      type : "tools"
    },
    {
      name : "Vercel",
      icon : "../../assets/icons/vercel.svg",
      type : "tools"
    },
      {
        name : "GO",
        icon : "../../assets/icons/go-lang.svg",
        type : "back"
      },
    {
      name : "NPM",
      icon : "../../assets/icons/npm.svg",
      type : "tools"
    },
    {
      name : "CSS",
      icon : "../../assets/icons/css-3.svg",
      type : "front"
    }, 
    {
      name : "Xampp",
      icon : "../../assets/icons/xampp.svg",
      type : "tools"
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
