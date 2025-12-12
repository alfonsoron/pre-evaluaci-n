import { Component, input, signal } from '@angular/core';
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


    //@Input() mostrarSaludo: boolean = true;
    _mostrarSaludo = input<boolean>(true);
    mostrarSaludo = signal(this._mostrarSaludo());

    alternarMensaje() {
      this.mostrarSaludo.update( (value) => !value);
    }

    _colorSeleccionado = input<string>('verde');
    colorSeleccionado = signal(this._colorSeleccionado());

    cambiarColor(color: string) {
      this.colorSeleccionado.set(color);
    }
  }


//hola
