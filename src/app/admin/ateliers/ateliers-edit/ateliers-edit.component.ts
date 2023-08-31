import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ateliers-edit',
  templateUrl: './ateliers-edit.component.html',
  styleUrls: ['./ateliers-edit.component.css']
})
export class AteliersEditComponent implements OnInit {

  constructor ( private activated : ActivatedRoute ){}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => { console.log(data);}
    )
  }

}
