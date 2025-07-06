import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LucideAngularModule, icons, Search } from 'lucide-angular';
import {iconCategories} from '../../../configs/icon-categories.config';

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
  selectedIcon = '';
  selectedCategory = '';
  protected readonly iconCategories = iconCategories;
  protected readonly Search = Search;
  @Output() iconChange = new EventEmitter<any>();

  ngOnInit() {
  }

  categorizedIcons = Object.entries(this.iconCategories).map(([key, category]) => ({
    categoryKey: key,
    categoryName: category.name,
    icons: Object.entries(icons)
      .filter(([name]) => {
        const iconName = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        return category.icons.includes(iconName);
      })
      .map(([name, icon]) => ({
        name: name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
        icon
      }))
  }));

  selectIcon(icon: any) {
    this.iconChange.emit(icon);
  }
}
