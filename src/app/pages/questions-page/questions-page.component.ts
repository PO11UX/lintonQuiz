import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { questionsDto } from 'src/app/shared/interface/questions.interface';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { resultService } from 'src/app/shared/services/result.service';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css']
})
export class QuestionsPageComponent implements OnInit, OnDestroy {
  currentQuestionId: number = 0;
  questions: questionsDto[] = [];
  isQuestions!: Promise<boolean>
  questionsSub!: Subscription;
  constructor(private questionsService: QuestionsService, private resultService: resultService, private router: Router){}
  ngOnInit(): void {
   this.questionsSub = this.questionsService.getQuestions().subscribe((result) => {
      this.questions = result
      this.isQuestions = Promise.resolve(true);
    })
  }
  
  changeQuestion(questionId: number) {
    this.currentQuestionId = questionId
  }

  showResult(){
    this.resultService.calculateScore(this.questions)
      this.router.navigate(['/result'])
  }
  ngOnDestroy(): void {
    this.questionsSub.unsubscribe()
  }
}
