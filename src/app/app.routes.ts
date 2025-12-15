import { Routes } from '@angular/router';
import { Saludo } from './pages/saludo/saludo';
import { Despedida } from './pages/despedida/despedida';
import { Padre } from './pages/padre/padre';

export const routes: Routes = [



  { path: '',
    component: Padre },


  { path: 'despedida/:nombre',
    component: Despedida },

  {
     path: '**',
     redirectTo: ''
  }
];

