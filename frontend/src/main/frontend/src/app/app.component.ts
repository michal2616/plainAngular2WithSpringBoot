import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   template: `
// <p>Hi there</p>
// <ul>
// <li>Hi there list</li>
// </ul>`,
//   styles: ['p{ font-weight: bold;} ul li {text-decoration:underline}']
})
export class AppComponent {
  title = 'app workaaaas!';
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http){
    console.log('Hello gello user');
    this.getContacts();
    this.getData();
  }


  private getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  private getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
}
