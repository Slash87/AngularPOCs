import { Component, OnInit } from '@angular/core';
import { TitlebarService } from '../titlebar/titlebar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private titlebarService: TitlebarService) { }

  ngOnInit() {
    this.titlebarService.changeTitle('Home Page');
  }

  changeTitle() {
    this.titlebarService.changeTitle('New title');
  }

}
