import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayusculasPipe } from "../../mayusculas-pipe";
import { RouterModule } from "@angular/router";
@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.html',
  standalone: true,
  imports: [CommonModule, MayusculasPipe, RouterModule],
})
export class Saludo {

  nombre: string = 'AlfOnSo RoN';

    mostrarSaludo = input<boolean>(true);

    colorSeleccionado = input<string>('verde');

}



//hola
