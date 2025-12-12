import { Routes } from '@angular/router';
import { Saludo } from './pages/saludo/saludo';
import { Despedida } from './pages/despedida/despedida';

export const routes: Routes = [



  { path: '',
    component: Saludo },


  { path: 'despedida/:nombre',
    component: Despedida },

  {
     path: '**',
     redirectTo: ''
  }
];

