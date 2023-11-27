import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  bufferWhen,
  filter,
  interval,
  map,
  from,
  Subject,
  Subscription,
  take,
  flatMap,
  mergeMap,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-rx-example',
  templateUrl: './rx-example.component.html',
  styleUrls: ['./rx-example.component.css'],
})
export class RxExampleComponent implements OnInit {
  lightOn: boolean = false;

  transmission = '';
  output = '';

  private activeEncodeSubscription: Subscription | null = null;
  private activeSubjectSubscription: Subscription | null = null;
  private activeSubscription: Subscription | null = null;
  private activeTransmissionSubscription: Subscription | null = null;

  private morseCodes: Record<string, string> = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
  };
  private letters: Record<string, string> = Object.keys(this.morseCodes).reduce(
    (acc: Record<string, string>, key: string) => {
      acc[this.morseCodes[key]] = key;
      return acc;
    },
    {}
  );

  constructor() {
    console.log(this.letters);
  }

  ngOnInit(): void {}

  encode(text: string, intervalMS: number) {
    this.stop();

    const code = from(text).pipe(
      mergeMap((e) => e),
      map((letter) => (this.letters[letter] ?? '/') + ' '),
      mergeMap((e) => e)
    );

    let index = 0;

    this.activeEncodeSubscription = zip(code, interval(intervalMS)).subscribe(
      ([morse]) => {
        this.transmission += morse;
        switch (morse) {
          case ' ':
            this.output += text[index++];
            break;
          case '.':
            this.dot(intervalMS);
            break;
          case '-':
            this.line(intervalMS);
            break;
        }
      }
    );
  }

  // - .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.
  decode(code: string, intervalMS: number) {
    this.stop();

    const morseSubject = new Subject<string>();

    this.activeTransmissionSubscription = morseSubject.subscribe(
      (symbol: string) => {
        this.transmission += symbol;
        if (symbol === '.') this.dot(intervalMS);
        if (symbol === '-') this.line(intervalMS);
      }
    );

    const spaceObservable = morseSubject.pipe(
      filter((value: string) => value === ' ' || value === '/')
    );

    this.activeSubjectSubscription = morseSubject
      .pipe(
        filter((char: string) => char !== ' '),
        bufferWhen(() => spaceObservable),
        map((morseChar: string[]) => morseChar.join('')),
        map((char: string) => this.morseCodes[char] ?? ' ')
      )
      .subscribe((char: string) => (this.output += char));

    this.activeSubscription = interval(intervalMS)
      .pipe(
        take(code.length),
        map((i: number) => code[i])
      )
      .subscribe(morseSubject);
  }

  stop() {
    this.activeEncodeSubscription?.unsubscribe();
    this.activeSubscription?.unsubscribe();
    this.activeSubjectSubscription?.unsubscribe();
    this.activeTransmissionSubscription?.unsubscribe();
    this.transmission = '';
    this.output = '';
  }

  private dot(duration: number) {
    this.lightOn = true;
    setTimeout(() => (this.lightOn = false), duration * 0.3);
  }

  private line(duration: number) {
    this.lightOn = true;
    setTimeout(() => (this.lightOn = false), duration * 0.7);
  }
}
