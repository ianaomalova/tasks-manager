import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LucideAngularModule, Search} from 'lucide-angular';
import {CategorizedIcons, getCategorizedIcons} from '../../../utils/icon.utils';

@Component({
  selector: 'app-icon-picker',
  imports: [
    LucideAngularModule,
  ],
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.scss'
})

export class IconPickerComponent implements OnInit {
  searchQuery = '';
  categorizedIcons: CategorizedIcons[] = [];
  protected readonly Search = Search;
  @Output() iconChange = new EventEmitter<string>();

  ngOnInit() {
    this.categorizedIcons = getCategorizedIcons();
  }

  selectIcon(icon: string) {
    this.iconChange.emit(icon);
  }
}
