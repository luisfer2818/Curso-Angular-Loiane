import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'http://loiane.training';
  urlImagem: string = 'http://lorempixel.com.br/400/200/nature';

  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: any;
  isMouseOver: boolean = false;

  nome: string = 'abc';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
