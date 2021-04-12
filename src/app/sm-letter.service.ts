import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmLetterService {

  private _letters: String[] = [];
  letters: BehaviorSubject<String[]> = new BehaviorSubject(this._letters);

  words = ["Quality code","Creative","Intuitive pages","Ingenius","Proactive"];
  word = "";
  count = -1;
  countLetter = 0;
  countWords = -1;
  indexLetterOfWord = 0;
  removing: boolean = false;
  timer: any;

  constructor() { }

  get(): BehaviorSubject<String[]> {
    return this.letters;
  }

  manageLetters() { 
    if(this.removing) {
      this.removeLetter();
    } else {
      if(this.word == ""){
        this.changeWord();
      }
      this.addLetter();
    } 
    this.timer = setTimeout(() => {
      this.manageLetters();
    }, 100);
  }

  addLetter(){ 
    if(this.word.length > this.indexLetterOfWord) {
      this._letters.push(this.word.substr(this.indexLetterOfWord, 1));
      this.countLetter ++;
      this.indexLetterOfWord ++;
      this.letters.next(this._letters);
    } else {
      this.removing = true;
      this.removeLetter();
    }
  }

  removeLetter() {
    console.log("remove letter"); 
    if(this.countLetter > 0) {
      this._letters.pop();
      this.countLetter--;
      this.indexLetterOfWord --;
      console.log(this._letters); 
      console.log(this.countLetter); 
      this.letters.next(this._letters);
    } else {
      this.changeWord();
    }
  }

  changeWord() {
    if(this.countWords < this.words.length-1) {
      this.countWords++;
    } else {
      this.countWords = 0;
    }
      this.word = this.words[this.countWords];
      this.removing = false;
  }
}
