import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  fullName!: string;
  address!: string;
  creditCard!: number;

  @Output() confirmation: EventEmitter<string> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  onSubmit():void{
    this.confirmation.emit(this.fullName);
  }

}
