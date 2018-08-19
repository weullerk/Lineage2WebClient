import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  template: `
    <h3>Acesso restrito</h3>
    <p>Para acessar essa página você deve estar logado!</p>
  `
})
export class ForbiddenComponent {}
