import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/utils/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  question: Question = {
    id: undefined,
    text: '',
    correctAnswer: '',
    firstAnswer: '',
    secondAnswer: '',
    thirdAnswer: '',
  };

  constructor(private api: QuestionService) {}

  ngOnInit(): void {
    this.api.questionSelected.subscribe(
      (question) => (this.question = question)
    );
  }

  post(question) {
    console.log(question);
    this.api.postQuestion(question);
  }
}
