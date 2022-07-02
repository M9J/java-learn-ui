import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-ui';
  response: any = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://m9j-java-learn-7wj5465p2rpx7-8080.githubpreview.dev/greeting'
      )
      .subscribe((response) => {
        this.response = JSON.stringify(response);
      });
  }
}
