import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-shinobi-app-top-page',
  templateUrl: 'top.component.html'
})

export class TopComponent implements OnInit {
  readonly links: Array<Record<string, string>> = [
    { url: '/', text: 'トップページ' },
    { url: '/character-list', text: 'キャラクターリスト' }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
