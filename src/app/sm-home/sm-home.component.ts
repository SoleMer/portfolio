import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SmLetterService } from '../sm-letter.service';

@Component({
  selector: 'app-sm-home',
  templateUrl: './sm-home.component.html',
  styleUrls: ['./sm-home.component.scss']
})
export class SmHomeComponent implements OnInit {

  words = ["Quality code","Creative","Intuitive pages","Ingenius","Proactive"];
  word = "";
  /*private _letters: String[] = [];
  letters: BehaviorSubject<String[]> = new BehaviorSubject(this._letters);*/
  letters$ : Observable<String[]>;
  count = -1;
  countLetter = 0;
  countWords = -1;
  indexLetterOfWord = 0;
  removing: boolean = false;
  timer: any;
  
  constructor(private svc: SmLetterService) {
    this.letters$ = svc.letters.asObservable();
   }
  
  ngOnInit(): void {
    this.svc.manageLetters();
  }
  ngOnDestroy(): void {
    clearTimeout();
  }

}
