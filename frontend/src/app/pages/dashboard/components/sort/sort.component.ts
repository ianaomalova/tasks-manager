import {Component, EventEmitter, Output} from '@angular/core';
import {ArrowDownWideNarrow, ArrowUpNarrowWide, LucideAngularModule} from 'lucide-angular';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-sort',
  imports: [
    LucideAngularModule,
    NgClass
  ],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})
export class SortComponent {
  @Output() onSortChange = new EventEmitter<'asc' | 'desc'>();
  activeSort: boolean = false;
  sort: 'asc' | 'desc' = 'asc';

  changeSort() {
    this.activeSort = true;
    this.sort = this.sort === 'asc' ? 'desc' : 'asc';
    this.onSortChange.emit(this.sort);
  }

  protected readonly ArrowDownWideNarrow = ArrowDownWideNarrow;
  protected readonly ArrowUpNarrowWide = ArrowUpNarrowWide;
}
