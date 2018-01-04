import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-old-fruit',
  templateUrl: './old-fruit.component.html',
  styleUrls: ['./old-fruit.component.css']
})
export class OldFruitComponent implements OnInit {

  @Input() fruits: number[];

  public glyphs: Array<string>;
  
  constructor() { }

  ngOnInit() {
    this.glyphs = [
      "fa-question-circle",
      "fa-bug",
      "fa-leaf",
      "fa-paw",
      "fa-tree",
      "fa-star",
      "fa-snowflake-o"
    ];
  }

}
