import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionListComponent } from './components/questionList/questionList.component';
import { QuestionService } from './services/question.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { QuizComponent } from './components/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionListComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
