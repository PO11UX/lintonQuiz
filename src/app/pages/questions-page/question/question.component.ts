import { Component, Input, OnInit } from '@angular/core';
import { questionsDto } from 'src/app/shared/interface/questions.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {
@Input()  currentQuestionId: number = 0;
@Input() question!: questionsDto 

  constructor(){}
  ngOnInit(): void {

  }
  
  changeSelectedAnswer(id: number){
    this.question.selectedOptionId = id; 
  }

}
