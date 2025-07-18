import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ChatComponent} from '../../chat/chat.component';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {ThemeToggleComponent} from '../../ui/theme-toggle/theme-toggle.component';
import {filter, map, merge, of, Subscription} from 'rxjs';
import {SearchComponent} from '../../ui/search/search.component';
import {NotifyComponent} from '../../ui/notify/notify.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    SidebarComponent,
    ChatComponent,
    RouterOutlet,
    ThemeToggleComponent,
    SearchComponent,
    NotifyComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Dashboard';
  private routeSub: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.routeSub = merge(
      of(null),
      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    )
      .pipe(
        map(() => this.getRouteTitle())
      )
      .subscribe(title => {
        this.pageTitle = title;
      });
  }

  private getRouteTitle(): string {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'] || 'Default Page';
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
