import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/utils/question';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionList',
  templateUrl: './questionList.component.html',
  styleUrls: ['./questionList.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: Question = {
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
    var quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(quizId).subscribe((response) => {
      this.questions = response as Question;
    });
  }
}
