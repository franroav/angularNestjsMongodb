import { Injectable, ReflectiveInjector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  readAll(): Observable<any> {
    try {
      return this.httpClient.get(baseURL);
    } catch (e) {
      console.log('error: ' + e.stack);
    }
  }

  read(id: String): Observable<any> {
    try {
      return this.httpClient.get(`${baseURL}/${id}`);
    } catch (e) {
      console.log('error: ' + e.stack);
    }
  }

  create(data: any): Observable<any> {
    try {
      return this.httpClient.post(baseURL + '/create', data);
    } catch (e) {
      console.log('error: ' + e.stack);
    }
  }

  update(id: String, data: any): Observable<any> {
    try {
      return this.httpClient.put(`${baseURL}/${id}`, data);
    } catch (e) {
      console.log('error: ' + e.stack);
    }
  }

  delete(id: String): Observable<any> {
    try {
      return this.httpClient.delete(`${baseURL}/delete?articleID=${id}`);
    } catch (e) {
      console.log('error: ' + e.stack);
    }
  }
  searchByName(name): Observable<any> {
    try {
      return this.httpClient.get(`${baseURL}?name=${name}`);
    } catch (e) {
      console.log('error: ' + e.stack);
    }
  }
  getHackersNewsCollectionByPage(page: Number, hits: Number): Promise<any> {
    try {
      let apiURL = `${baseURL}/page=${page}&hits=${hits}`;
      return this.httpClient.get(apiURL).toPromise();
    } catch (e) {
      console.log('error: ' + e.stack);
    }
  }
}
