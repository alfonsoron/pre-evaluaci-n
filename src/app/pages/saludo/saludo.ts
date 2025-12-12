import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayusculasPipe } from "../../mayusculas-pipe";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.html',
  standalone: true,
  imports: [CommonModule, MayusculasPipe, RouterLink],
})
export class Saludo {

  nombre: string = 'AlfOnSo RoN';


    @Input() mostrarSaludo: boolean = true;
    //mostrarSaludo = input<boolean>(true); no se usa input porque define a la funcion ya con ture

    alternarMensaje() {
      this.mostrarSaludo = !this.mostrarSaludo;
    }


    colorSeleccionado: string = 'verde';

    cambiarColor(color: string) {
      this.colorSeleccionado = color;
    }
  }


