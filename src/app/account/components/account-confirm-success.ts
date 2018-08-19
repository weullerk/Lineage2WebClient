import { Component } from '@angular/core';

@Component({
  selector: 'app-account-confirm-success',
  template: `
              <h3>Conta confirmada</h3>
              <hr />
              <p>
                Sua conta foi confirma com sucesso! 
                <br>No próximo login in-game uma recompensa estará disponivel para você.
              </p>
            `
})
export class AccountConfirmSuccessComponent {}
