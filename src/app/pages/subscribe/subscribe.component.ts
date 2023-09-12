import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent implements OnInit {
  paramsData = '';
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((data) => {
      this.paramsData = data.get('subscribe') || '';
    });
  }

  isBack() {
    window.history.back();
  }
}
