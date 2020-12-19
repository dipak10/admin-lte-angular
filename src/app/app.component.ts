import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adminpanel';
  shouldShowLoginModal: boolean;

  ngOnInit(): void {
    this.shouldShowLoginModal = true;
  }

}
