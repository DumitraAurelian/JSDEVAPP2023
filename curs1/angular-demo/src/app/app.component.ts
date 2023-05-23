import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // calea unde va fi injectat html-ul
  templateUrl: './app.component.html',
  // fisierul meu html va fi injectat in acest folder, adica locul in care se va salva html-ul
  styleUrls: ['./app.component.css']
  //  css-ul care se va aplica html-ului
})
export class AppComponent {
  title = 'angular-demo';
}
