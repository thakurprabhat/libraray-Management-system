import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  navItem: Array<any> = [
    { label: 'Dashboard', routerLink: '/dashboard' },
    { label: 'Books', routerLink: '/books' },
    { label: 'Members', routerLink: '/members' },
    { label: 'Settings', routerLink: '/settings' },
  ];
}
