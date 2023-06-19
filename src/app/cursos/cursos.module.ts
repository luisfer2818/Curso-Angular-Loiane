import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule],
  exports: [CursosComponent],
  providers: [CursosService],
})
export class CursosModule {}
