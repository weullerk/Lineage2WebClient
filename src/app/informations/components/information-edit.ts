import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-information-edit',
  templateUrl: './information-edit.html'
})
export class InformationEditComponent implements OnInit{
  editInformation: boolean = false;
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editInformation = params['id'] != null;
      this.id = +params['id'];
    });

  }
}
