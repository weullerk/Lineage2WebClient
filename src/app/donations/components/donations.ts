import { Component } from '@angular/core';

@Component({
  selector: 'app-donations',
  template: `
              <h3>Doações</h3>
              <hr />
              <p>Faça sua doação, colabore com o nosso servidor e ganhe recompensas.</p>
              <p>A recompensa é convertida em coins dentro do servidor, a cada R$ 1,00 doado você recebe 1 coin.</p>
              <h4>Realizar Doação</h4>
              <p>Valor da Doação | Selecionar Pagamento | Confirmar</p>
              <p>**Depois de selecionar o pagamento exibe o formulário para preencher os campos ou exibe a conta bancaria e o botão para confirmar.</p>
              <p>O método de pagamento foi PagSeguro, clique aqui para imprimir seu boleto ou realizar o pagamento online.</p>
            `
})
export class DonationsComponent {}
