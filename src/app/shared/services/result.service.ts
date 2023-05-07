import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { questionsDto } from '../interface/questions.interface';

@Injectable({
    providedIn: 'root',
}
)
export class resultService {
    private dataSubject = new BehaviorSubject<string>('');
    public data$ = this.dataSubject.asObservable();
    score: number = 0;
    constructor() { };
    calculateScore(questions: questionsDto[]): void {
        questions.forEach((el) => {
            if (el.correctOptionId === el.selectedOptionId) {
                this.score++
            }
        })
        this.calculateResult(this.score)
    }
    calculateResult(score: number) {
        if (score >= 2) {
            this.dataSubject.next('Extrovert')
        }
        else { this.dataSubject.next('Introvert') }
    }
}