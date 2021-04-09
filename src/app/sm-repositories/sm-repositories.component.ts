import { Component, OnInit } from '@angular/core';
import { Repository } from './repository';

@Component({
  selector: 'app-sm-repositories',
  templateUrl: './sm-repositories.component.html',
  styleUrls: ['./sm-repositories.component.scss']
})
export class SmRepositoriesComponent implements OnInit {

  repos : Repository[] = [
    {
      technology: "Angular - TypeScript - Sass - JavaScript - HTML - NPM - Bootstrap - Webpack - Vercel",
      url: "https://github.com/SoleMer/ikaruna",
      name: "Ikaruna"
    },
    {
      technology: "PHP - MySQL - PDO - XAMPP - Postman",
      url: "https://github.com/SoleMer/ikaruna-backend",
      name: "Ikaruna BackEnd"
    },
    {
      technology: "Java",
      url: "https://github.com/SoleMer/repo-programacion",
      name: "Juego de cartas y personajes"
    },
    {
      technology: "PHP - Vue - Smarty - MySQL - PDO - Xampp - Postman",
      url: "https://github.com/SoleMer/Web2-TPE",
      name: "Pagina de comercio"
    },
    {
      technology: "GOlang - SQLite - Postman",
      url: "https://github.com/SoleMer/proyecto-go",
      name: "Creacion y conexion de API Rest"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
