import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/utils/quiz';

@Component({
  selector: 'app-quizList',
  templateUrl: './quizList.component.html',
  styleUrls: ['./quizList.component.scss'],
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz = {
    id: undefined,
    title: '',
  };

  constructor(private api: QuizService) {}

  ngOnInit() {
    this.api.getQuizzes().subscribe((response) => {
      this.quizzes = response as Quiz;
    });
  }
}
