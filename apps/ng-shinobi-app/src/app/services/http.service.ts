import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  /**
   * get requestを送る
   * @param url リクエストURL
   * @param query クエリパラメータ
   */
  public fetch<V>(url: string, query?: Map<string, string>) {
    return new Observable<V>((observer) => {
      const value: unknown = [{
        userId: 'test_user',
        playerName: 'テストユーザ',
        name: '最強の忍び',
        kana: 'さいきょうのしのび',
        regulation: 'hoge',
        type: 'huga',
        ryuha: '流派',
        kairyuha: '下位流派',
        ryugi: '流儀',
        enemy: '敵',
        rank: '下忍',
        achievement: 'hoge',
        age: '20',
        gender: '男',
        face: '表の顔',
        belief: '信念'
      }];
      observer.next(value as V);
      observer.complete();
    });
    // this.httpClient.get(this.addQuery(url, query));
  }

  /**
   * URLにクエリパラメータを追加する
   * @param url リクエストURL
   * @param query 追加するクエリ
   * @private
   */
  private addQuery(url: string, query?: Map<string, string>): string {
    const requestUrl = new URL(url);
    for (const [name, value] of query) {
      requestUrl.searchParams.set(name, value);
    }
    return requestUrl.toString();
  }
}
