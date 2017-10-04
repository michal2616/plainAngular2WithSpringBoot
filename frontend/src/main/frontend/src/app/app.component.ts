import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dasboard</a>
    <a routerLink="/heroes">Heroes</a>
   <h1>Punkt 6, podrozdzial 'Add heroes to the dashboard'</h1>
    </nav>
    <router-outlet></router-outlet>
  `
})


export class AppComponent{
  title = 'Tour of Heroes';
}
