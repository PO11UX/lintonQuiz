import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { questionsDto } from 'src/app/shared/interface/questions.interface';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
})
export class actionsComponent implements OnInit {
  @Input() currentQuestionId: number = 0;
  @Input() currentQuestion!: questionsDto;
  @Input() questionsLength: number = 0;
  @Output() changeQuestion = new EventEmitter<number>();
  @Output() showResult = new EventEmitter()
  constructor() { }
  ngOnInit(): void {

  }

  next() {
    this.currentQuestionId++;
    this.changeQuestion.emit(this.currentQuestionId)
  }
  prev() {
    this.currentQuestionId--;
    this.changeQuestion.emit(this.currentQuestionId)
  }

  result() {
    this.showResult.emit()
  }


}
