import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [

    { path: 'login', component: Login },

    // FRONTEND LAYOUT
    {
        path: '',
        component: Layout, // Your "cart wish" layout
        children: [
            {
                path: 'home',
                loadComponent: () => import('./components/home/home').then(c => c.Home),
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],
    },

    // ADMIN/DASHBOARD LAYOUT
    {
        path: 'admin',
        component: Dashboard,
        children: [
            {
                path: 'create-user',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser),
            },
            {
                path: 'user-profile',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser), // placeholder
            },
            {
                path: 'category-list',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser), // placeholder
            },
            {
                path: 'category-add',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser), // placeholder
            },
            {
                path: 'product-list',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser), // placeholder
            },
            {
                path: 'product-add',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser), // placeholder
            },
            {
                path: 'order-list',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser), // placeholder
            },
            {
                path: 'order-pending',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser), // placeholder
            },
            { path: '', redirectTo: 'create-user', pathMatch: 'full' },
        ]
    },

    { path: '**', redirectTo: 'login' },
];