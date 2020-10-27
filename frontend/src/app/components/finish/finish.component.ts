import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
})
export class FinishComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) data) {}

  ngOnInit() {}
}
