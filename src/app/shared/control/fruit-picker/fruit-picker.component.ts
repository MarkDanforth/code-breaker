import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit-picker',
  templateUrl: './fruit-picker.component.html',
  styleUrls: ['./fruit-picker.component.css']
})
export class FruitPickerComponent implements OnInit {

  @Input() selectedValue: number = 0;

  @Output() selectedValueChange = new EventEmitter<number>();

  public glyphs: Array<string>;
  private pickerIsVisible: boolean = false;

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

  pickFruit(value: number) {
    this.selectedValue = value;
    this.pickerIsVisible = false;
    this.selectedValueChange.emit(this.selectedValue);
  }

  showPicker() {
    this.pickerIsVisible = true;
  }
}
