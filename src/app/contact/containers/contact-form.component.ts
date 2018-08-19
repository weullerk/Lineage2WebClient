import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  template: `<h4>Formulário de contato</h4>
  <p>Entre em contato diretamente através do site.</p>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 px-0">

    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" name="name" id="name" formControlName="name" class="form-control" [ngClass]="form.get('name') | validate">
        <div *ngIf="form.get('name').errors?.required" class="invalid-feedback">O nome é obrigatório.</div>
      </div>

      <div class="form-group">
        <label for="name">Assunto</label>
        <input type="text" name="subject" id="subject" formControlName="subject" class="form-control" [ngClass]="form.get('subject') | validate">
        <div *ngIf="form.get('subject').errors?.required" class="invalid-feedback">O assunto é obrigatório.</div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" formControlName="email" class="form-control" [ngClass]="form.get('email') | validate">
        <div *ngIf="form.get('email').errors?.required" class="invalid-feedback">O email é obrigatório.</div>
        <div *ngIf="form.get('email').errors?.email" class="invalid-feedback">Insira um email válido.</div>
      </div>

      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea name="message" id="message" formControlName="message" class="form-control" [ngClass]="form.get('message') | validate"></textarea>
        <div *ngIf="form.get('message').errors?.required" class="invalid-feedback">A mensagem é obrigatória.</div>
      </div>
      
      <button class="btn btn-primary" [disabled]="form.status === 'INVALID'" type="submit">Enviar</button>
      <button class="btn btn-danger" (click)="onReset()" type="button">Limpar</button>
    </form>
  </div>`
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'subject': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.form);
  }

  onReset() {
    this.form.reset();
    this.form.updateValueAndValidity();
  }

}
