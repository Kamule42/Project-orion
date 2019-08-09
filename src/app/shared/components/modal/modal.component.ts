import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  shown:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show(){
    this.shown = true;
  }

  close(){
    this.shown = false;
  }

}