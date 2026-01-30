import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { Login } from './components/login/login';

export const routes: Routes = [

      { path: 'login', component: Login },

       {
        path: '',
        component: Layout,
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./components/home/home').then(c => c.Home),
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],
    },

    // Fallback
    { path: '**', redirectTo: 'login' },
];