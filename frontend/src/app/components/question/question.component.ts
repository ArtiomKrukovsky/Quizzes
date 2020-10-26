import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/utils/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  quizId: number;
  question: Question = {
    id: undefined,
    text: '',
    correctAnswer: '',
    firstAnswer: '',
    secondAnswer: '',
    thirdAnswer: '',

    quizId: undefined,
  };

  constructor(private api: QuestionService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    this.api.questionSelected.subscribe(
      (question) => (this.question = question)
    );
  }

  post(question) {
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }
}
