import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre1',
  templateUrl: './genre1.page.html',
  styleUrls: ['./genre1.page.scss'],
})
export class Genre1Page implements OnInit {
  private selectedSegment: string ='nov'
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
