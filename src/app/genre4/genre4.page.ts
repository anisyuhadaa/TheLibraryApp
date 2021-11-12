import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre4',
  templateUrl: './genre4.page.html',
  styleUrls: ['./genre4.page.scss'],
})
export class Genre4Page implements OnInit {
  private selectedSegment: string ='nov'
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
