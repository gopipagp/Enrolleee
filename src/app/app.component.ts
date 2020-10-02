import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { EnrolleesService } from './services/enrollees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'enrollee';

  users: User[] = [];
  constructor(private enrolleeService: EnrolleesService) {}

  ngOnInit() {
    this.enrolleeService.getEnrollees().subscribe((data: User[]) => {
        this.users = data;
    });
  }

}
