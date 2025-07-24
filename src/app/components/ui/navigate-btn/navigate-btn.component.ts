import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navigate-btn',
  imports: [
    NgClass
  ],
  templateUrl: './navigate-btn.component.html',
  styleUrl: './navigate-btn.component.scss'
})
export class NavigateBtnComponent implements OnInit {
  @Input() disabled = false;
  ngOnInit() {
    console.log(this.disabled);
  }
}
