import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-sm-contact',
  templateUrl: './sm-contact.component.html',
  styleUrls: ['./sm-contact.component.scss']
})
export class SmContactComponent implements OnInit {

  items : Item[] = [
    {
      name: "email",
      to_show: "soledadmerino.1994@gmail.com",
      icon: "../../assets/icons/email.svg"
    },
    {
      name: "phone",
      to_show: "+54 2262 63 0591",
      icon: "../../assets/icons/telephone.svg"
    },
  ];

  user = "";
  pass = "";

  
  constructor() { }

  ngOnInit(): void {
  }

}
