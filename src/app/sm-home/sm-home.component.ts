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
    //this.changeWords();
    this.svc.manageLetters();
  }
  ngOnDestroy(): void {
    clearTimeout();
  }

  changeWords() {
    if(this.count < this.words.length-1) {
      this.count++;
    } else {
      this.count = 0;
    }
      this.word = this.words[this.count];
      this.timer = setTimeout(() => {
        this.changeWords();
      }, 4000);
  }
 

 /* manageLetters() { 
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
    }, 1000);
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


  IVAN CODE

  const currentSentence = useMotionValue<string[]>(sentences[1].split(""));
  const pauseAnimation = useMotionValue<boolean>(false);
  const arr = useMotionValue<string[]>(sentences[0].split(""));
  const removing = useMotionValue<boolean>(true);
  const currentIdx = useMotionValue<number>(1);
  const [word, setWord] = useState(arr.get());

  const removeLetter = () => {
    const newArr = [...arr.get()];
    newArr.pop();
    arr.set(newArr);
    setWord(arr.get());

    if (arr.get().length === 0) {
      removing.set(false);
      pauseAnimation.set(true);
    }
  };

  const changeCurrentIdx = () => {
    const index = currentIdx.get();
    if (index < sentences.length - 1) {
      currentIdx.set(index + 1);
    } else {
      currentIdx.set(0);
    }

    currentSentence.set(sentences[currentIdx.get()].split(""));
  };

  const addLetter = async () => {
    const newArr = [...arr.get()];
    const newSentence = [...currentSentence.get()];
    newArr.push(newSentence.shift() as string);
    currentSentence.set(newSentence);
    arr.set(newArr);
    setWord(arr.get());
    if (newSentence.length === 0) {
      removing.set(true);
      changeCurrentIdx();
      pauseAnimation.set(true);
    }
  };

  const manageLetters = async () => {
    if (pauseAnimation.get()) return;
    if (removing.get()) {
      removeLetter();
    } else {
      await addLetter();
    }
  };

  useEffect(() => {
    pauseAnimation.onChange((v) => {
      if (v) {
        setTimeout(() => {
          pauseAnimation.set(false);
        }, 1000);
      }
    });
    setInterval(() => manageLetters(), 70);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arr, removing]);*/
}
