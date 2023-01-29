import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  // @Input()
  // itemList: any[] = [];    // declaration of array

  itemList = [
    { name: "Airpod Pro", id: 1, price: 369},
    { name: "Airpod", id: 2, price: 250},
    { name: "Iphone", id: 3, price: 4000},
  ]
  selectedItem: any;


  // @Output()
  // newItemEvent = new EventEmitter<any>();

  // onItemClick(item: any) {
  //   this.newItemEvent.emit(item);
  // }
  
  // onItemClick(item: any) {
  //   this.selectedItem = item;
  //   console.log("item selected", item.name)
  // }

  onItemClick($event: any) {
    this.selectedItem = $event.target.value;
    console.log("item selected", $event.target.value)
  }
}
