import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
})
export class PlayComponent implements OnInit {
  quizzes: any;
  constructor(private api: QuizService) {}

  ngOnInit() {
    this.api.getAllQuizzes().subscribe((response) => {
      this.quizzes = response;
    });
  }
}
