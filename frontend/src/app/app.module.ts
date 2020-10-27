import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionListComponent } from './components/questionList/questionList.component';
import { QuestionService } from './services/question.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizListComponent } from './components/quizList/quizList.component';
import { QuizService } from './services/quiz.service';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './api/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { PlayComponent } from './components/play/play.component';
import { PlayQuizComponent } from './components/playQuiz/playQuiz.component';
import { FinishComponent } from './components/finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionListComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizListComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishComponent,
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
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
  ],
  providers: [
    QuestionService,
    QuizService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
