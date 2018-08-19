import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-download-edit',
  templateUrl: './download-edit.html'
})
export class DownloadEditComponent implements OnInit{
  editDownload: boolean = false;
  id: number;
  form: FormGroup;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editDownload = params['id'] != null;
      this.id = +params['id'];
    });

    this.form = new FormGroup({
      'description': new FormControl('', Validators.required),
      'size': new FormControl('', Validators.required),
      'links': new FormArray([
        new FormControl('', Validators.required)
      ])
    });
  }

  get links(): FormArray {
    return this.form.get('links') as FormArray;
  }

  onAdd() {
    this.links.push(new FormControl('', Validators.required));
  }

  onRemove(i: number) {
    this.links.removeAt(i);
    return false;
  }

  onSubmit() {
    console.log(this.form);
  }

  onReset() {
    this.form.reset();
  }
}
