import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {ActiveTab} from '../../ActiveTab';

@Component({
  selector: 'app-filter',
  imports: [
    NgClass
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  selectedTab: ActiveTab = 'All';
  @Output() selectedTabChange = new EventEmitter<ActiveTab>();

  changeTab(tab: ActiveTab) {
    this.selectedTab = tab;
    this.selectedTabChange.emit(tab);
  }
}
