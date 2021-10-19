import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.httpClient.get<V>(this.addQuery(url, query));
  }

  /**
   * URLにクエリパラメータを追加する
   * @param url リクエストURL
   * @param query 追加するクエリ
   * @private
   */
  private addQuery(url: string, query?: Map<string, string>): string {
    const requestUrl = new URL(url);
    if (!query) {
      return requestUrl.toString();
    }
    for (const [name, value] of query) {
      requestUrl.searchParams.set(name, value);
    }
    return requestUrl.toString();
  }
}
