import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FinishComponent } from '../finish/finish.component';

@Component({
  selector: 'app-playQuiz',
  templateUrl: './playQuiz.component.html',
})
export class PlayQuizComponent implements OnInit {
  quizId: number;
  questions: any;

  constructor(
    private api: QuestionService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));

    this.api.getQuestions(this.quizId).subscribe((response) => {
      this.questions = response;

      this.questions.forEach((q) => {
        q.answers = [
          q.correctAnswer,
          q.firstAnswer,
          q.secondAnswer,
          q.thirdAnswer,
        ];
        shuffle(q.answers);
      });
    });
  }

  finish() {
    var correct = 0;
    this.questions.forEach((q) => {
      if (q.correctAnswer == q.selectedAnswer) {
        correct++;
      }
    });
    const dialogRef = this.dialog.open(FinishComponent, {
      data: { correct, total: this.questions.length },
    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
