import { Component, OnInit } from '@angular/core';
import { RestService } from './shared/api/rest.service';
import { Teams } from './shared/api/teams.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  teams$: Array<Teams> | null = null;
​
  constructor(private rest: RestService) {}

  ngOnInit(): void {
    this.callGetRest();
  }

  private callGetRest(): void {
    this.rest.get().subscribe(
      teams => this.teams$ = teams,
      error => console.log(error)
    );
  }
}
