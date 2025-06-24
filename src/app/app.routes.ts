import { Routes } from '@angular/router';
import { Todos } from './todos/todos';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home').then((m) => m.Home);
        },
    },
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos').then((m) => m.Todos);
        },

    },
];
