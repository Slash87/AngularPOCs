import { Component, OnInit, Input, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { TitlebarService } from './titlebar.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  constructor(public titlebarService: TitlebarService) { }

  ngOnInit() { }
}
