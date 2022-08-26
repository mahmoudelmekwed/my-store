import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  firstName: string='';
  address: string='';
  creditCard: number | string = '';

  @Output() confirmation: EventEmitter<string> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  onSubmit():void{
    this.confirmation.emit(this.firstName);
  }

}
