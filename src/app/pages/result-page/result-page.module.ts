import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResultPageComponent } from './result-page.component';


const routes: Routes = [{ path: '', component: ResultPageComponent }];

@NgModule({
  declarations: [
    ResultPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers:[
  ],
  exports:[
    RouterModule
  ]
})
export class ResultPageModule { }
