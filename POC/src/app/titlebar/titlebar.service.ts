import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitlebarService {

  titles: string[] = [];

  constructor() { }

  changeTitle(title: string) {
    this.clear();
    this.titles.push(title);
  }

  clear() {
    this.titles = [];
  }
}
