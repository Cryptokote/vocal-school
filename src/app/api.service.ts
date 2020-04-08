import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  private API_URL = '';

  constructor(
    private http: HttpClient
  ) {}

  public get apiUrl(): string {
    return this.API_URL;
  }

  public set apiUrl(url: string) {
    this.API_URL = url;
  }

  public request(method: string, url: string, options = {}): Observable<any> {
    return this.http.request(method, url, this.createHttpRequestOptions(options));
  }

  public getJson(url: string, options = {}): Observable<any> {
    return this.http.get(this.fullUrl(url), this.createHttpRequestOptions(options));
  }

  public postJson(url: string, body, options = {}): Observable<any> {
    return this.http.post(this.fullUrl(url), body, this.createHttpRequestOptions(options));
  }

  public putJson(url: string, body, options = {}): Observable<any> {
    return this.http.put(this.fullUrl(url), body, this.createHttpRequestOptions(options));
  }

  public deleteJson(url: string, options = {}): Observable<any> {
    return this.http.delete(this.fullUrl(url), this.createHttpRequestOptions(options));
  }

  private fullUrl(url: string): string {
    const splittedUrl = url.split('//');
    const firstElementIsProtocol = splittedUrl[0] === '' || splittedUrl[0].includes(':');

    return (splittedUrl.length === 2 && firstElementIsProtocol) ? url : this.API_URL + url;
  }

  private createHttpRequestOptions(options): {params: HttpParams} {
    let params = new HttpParams();
    Object.keys(options).forEach((optionKey) => {
      params = params.append(optionKey, options[optionKey]);
    });
    return {params};
  }

}
