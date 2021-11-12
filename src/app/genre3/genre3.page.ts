import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre3',
  templateUrl: './genre3.page.html',
  styleUrls: ['./genre3.page.scss'],
})
export class Genre3Page implements OnInit {
  private selectedSegment: string ='nov'
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
