import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../modal';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  http = inject(HttpClient);

  apiUrl: string = `https://freeapi.gerasim.in/api/Interview/`;

  getAllLanguages(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.apiUrl}GetAllLanguage`);
  }

   getLanguageTopicById(id:number): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      `${this.apiUrl}GetLanguageTopicById?id=${id}`
    );
  }

getQuestionByTopicId(topicId:number): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      `${this.apiUrl}GetQuestionByTopicId?id=${topicId}`
    );
  }
getAllQuestionsByLanguageId(languageId:number): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      `${this.apiUrl}GetAllQuestionsByLanguageId?id=${languageId}`
    );
  }

  
  
}
