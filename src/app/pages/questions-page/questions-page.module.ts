import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsPageComponent } from './questions-page.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { FormsModule } from '@angular/forms';
import { actionsComponent } from './actions/actions.component';


const routes: Routes = [{ path: '', component: QuestionsPageComponent }];

@NgModule({
  declarations: [
    QuestionsPageComponent,
    QuestionComponent,
    actionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    QuestionsService,
  ],
  exports:[
    RouterModule
  ]
})
export class QuestionsPageModule { }
