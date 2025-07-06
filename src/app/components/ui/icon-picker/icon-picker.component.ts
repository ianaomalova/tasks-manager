import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LucideAngularModule, Search} from 'lucide-angular';
import {CategorizedIcons, filterCategorizedIcons, getCategorizedIcons} from '../../../utils/icon.utils';
import {ModalService} from '../../../core/services/modal.service';

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
  filteredIcons: CategorizedIcons[] = [];
  protected readonly Search = Search;
  @Output() iconChange = new EventEmitter<string>();

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.categorizedIcons = getCategorizedIcons();
    this.filteredIcons = this.categorizedIcons;
  }

  selectIcon(icon: string) {
    this.iconChange.emit(icon);
    this.modalService.close();
  }

  search(query: string) {
    if (!query) {
      this.filteredIcons = this.categorizedIcons;
    } else {
      this.filteredIcons = filterCategorizedIcons(query);
    }
  }
}
