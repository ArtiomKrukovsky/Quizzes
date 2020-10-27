import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class QuizService {
  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) {}

  getQuizzes() {
    return this.http.get('http://localhost:58655/api/quizzes');
  }

  getAllQuizzes() {
    return this.http.get('http://localhost:58655/api/quizzes/all');
  }

  postQuiz(quiz) {
    this.http
      .post('http://localhost:58655/api/quizzes', quiz)
      .subscribe((response) => console.log(response));
  }

  putQuiz(quiz) {
    return this.http
      .put(`http://localhost:58655/api/quizzes/${quiz.id}`, quiz)
      .subscribe((response) => console.log(response));
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }
}
