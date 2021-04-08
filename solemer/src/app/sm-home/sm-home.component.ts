import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-home',
  templateUrl: './sm-home.component.html',
  styleUrls: ['./sm-home.component.scss']
})
export class SmHomeComponent implements OnInit {

  words = ["Quality code","Creative","Intuitive pages","Ingenius","Proactive"];
  word = "";
  cont = -1;

  constructor() { }

  ngOnInit(): void {
    this.changeWords();
  }

  changeWords() {
    if(this.cont < this.words.length-1) {
      this.cont++;
    } else {
      this.cont = 0;
    }
      this.word = this.words[this.cont];
      setTimeout(() => {
        this.changeWords();
      }, 4000);
    
  }
}
