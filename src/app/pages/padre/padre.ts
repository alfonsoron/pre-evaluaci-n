import { Component, signal } from '@angular/core';
import { Saludo } from "../saludo/saludo";

@Component({
  selector: 'app-padre',
  imports: [Saludo],
  templateUrl: './padre.html',


})
export class Padre {

  saludoVisible = signal<boolean>(true)

  alternarMensaje() {
      this.saludoVisible.update( (value) => !value);
    }

    cambiarSeleccionado = signal<string>('verde');

    cambiarColor(color: string) {
      this.cambiarSeleccionado.set(color);




}
}
