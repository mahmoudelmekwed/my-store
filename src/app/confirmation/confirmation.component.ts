import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  firstName: string | null = '';
  totalPrice: number | null = 0;
  fasmile = faSmile;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.firstName = params.get('firstName');
      this.totalPrice = Number(params.get('totalPrice'));
    })
  }

}
