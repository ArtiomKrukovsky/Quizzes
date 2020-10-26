import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class QuestionService {
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor(private http: HttpClient) {}

  postQuestion(question) {
    this.http
      .post('http://localhost:58655/api/questions', question)
      .subscribe((response) => console.log(response));
  }

  getQuestions(quizId) {
    return this.http.get(`http://localhost:58655/api/questions/${quizId}`);
  }

  putQuestion(question) {
    return this.http
      .put(`http://localhost:58655/api/questions/${question.id}`, question)
      .subscribe((response) => console.log(response));
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }
}
