import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'PSG', url: '/folder/PSG', icon: '/assets/psg.jpg' },
    { title: 'REAL', url: '/folder/REAL', icon: '/assets/real.jpg' },
    { title: 'FCB', url: '/folder/BARCA', icon: '/assets/fcb.jpg' }
  ];

  constructor() {}
}
