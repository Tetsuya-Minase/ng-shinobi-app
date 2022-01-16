import { Component } from '@angular/core';

@Component({
  selector: 'ng-shinobi-app-top-page',
  templateUrl: 'top.component.html',
})
export class TopComponent {
  readonly links: ReadonlyArray<Record<string, string>> = [
    { url: '/', text: 'トップページ' },
    { url: '/characters', text: 'キャラクターリスト' },
  ];
}
