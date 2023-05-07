import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService {

   constructor(private http: HttpClient) {}

    getQuestions(): Observable<any> {
        return this.http.get("./assets/questions.json");
    }
}