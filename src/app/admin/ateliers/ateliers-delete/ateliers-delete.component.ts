import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ateliers-delete',
  templateUrl: './ateliers-delete.component.html',
  styleUrls: ['./ateliers-delete.component.css']
})
export class AteliersDeleteComponent implements OnInit {

  constructor ( private activated : ActivatedRoute ){}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => { console.log(data);}
    )
  }

}
