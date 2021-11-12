import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() { 
    this.items =[
      {title:"Spinning Silver", link:"silver", icon:"book-outline"},
      {title:"Remarried Empress", link:"rm1"},
      {title:"Grown", link:"crown"},
      {title:"Dark Rise", link:"dark"},
      {title:"Portrait of a Scotman", link:"portrait"},
      {title:"The Last Chance Library", link:"the"},
      {title:"Lakesedge", link:"lake"},
      {title:"Suddenly Becoming a Princess",pic:"assets/web/sudden.jpg", link:"sdap"},
      {title:"The Begining After The End", link:"tbate"},
      {title:"Eleceed", link:"eleceed"},
      {title:"Solo Leveling", link:"solo"},
      {title:"True Education", link:"truedu"},
      {title:"The Lady and Her Butler",link:"lady"},

    ];
  }
  filterItems(searchTerm){
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
