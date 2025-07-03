import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent implements OnInit {
  @Input() progress: number = 0;

  className(): string {
    if (this.progress >0 && this.progress <=50) {
      return 'progress-bar-purple';
    } else if (this.progress >=51 && this.progress <=99) {
      return 'progress-bar-yellow';
    } else {
      return 'progress-bar-green';
    }
  }

  ngOnInit() {
    console.log(this.progress);
  }
}
