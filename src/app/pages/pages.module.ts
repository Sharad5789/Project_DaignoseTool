import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    HomeComponent,
    QuizComponent,
    ThankYouComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
  constructor(){
    console.log("Pages module loades!");
    
  }
 }
