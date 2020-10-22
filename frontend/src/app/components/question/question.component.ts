import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: string;

  constructor() { }

  ngOnInit(): void {
  }

  post(question){
    console.log(question)
  }

}
