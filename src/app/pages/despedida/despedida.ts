import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MayusculasPipe } from "../../mayusculas-pipe";

@Component({
  selector: 'app-despedida',
  imports: [MayusculasPipe],
  templateUrl: './despedida.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Despedida {

  nombreRecibido: string = '';


  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe((params: { [x: string]: string; }) => {
      this.nombreRecibido = params['nombre'];
    });
  }
}
