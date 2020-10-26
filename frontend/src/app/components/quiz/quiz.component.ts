import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from '../../utils/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quiz: Quiz = {
    id: undefined,
    title: '',
  };

  constructor(private api: QuizService) {}

  ngOnInit() {
    this.api.quizSelected.subscribe((question) => (this.quiz = question));
  }
}
