import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/utils/question';
import { QuestionService } from 'src/app/services/question.service';

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
  };

  constructor(private api: QuestionService) {}

  ngOnInit(): void {
    this.api.getQuestions().subscribe((response) => {
      this.questions = response as Question;
    });
  }
}
