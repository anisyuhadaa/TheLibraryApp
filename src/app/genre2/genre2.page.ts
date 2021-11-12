import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-genre2',
  templateUrl: './genre2.page.html',
  styleUrls: ['./genre2.page.scss'],
})
export class Genre2Page implements OnInit {
  private selectedSegment: string ='nov'
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
