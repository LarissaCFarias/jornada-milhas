import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  standalone: false,
  templateUrl: './botao-controle.component.html',
  styleUrl: './botao-controle.component.scss'
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
}
