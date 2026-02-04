import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { authGuard } from './shared/auth/auth-guard';

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
        path: 'dashboard',
        canActivate: [authGuard],
        component: Dashboard,
        children: [
            {
                path: 'create-user',
                loadComponent: () => import('./components/create-user/create-user').then(c => c.CreateUser),
            },
            {
                path: 'user-details',
                loadComponent: () => import('./components/users-details/users-details').then(c => c.UsersDetails),
            },

            {
                path: 'category-add',
                loadComponent: () => import('./components/create-category/create-category').then(c => c.CreateCategory), // placeholder
            },
            {
                path: 'category-details',
                loadComponent: () => import('./components/category-details/category-details').then(c => c.CategoryDetails), // placeholder
            },
            {
                path: 'product-add',
                loadComponent: () => import('./components/create-product/create-product').then(c => c.CreateProduct), // placeholder
            },
            {
                path: 'product-list',
                loadComponent: () => import('./components/product-details/product-details').then(c => c.ProductDetails), // placeholder
            },

            { path: '', redirectTo: 'create-user', pathMatch: 'full' },
        ]
    },

    { path: '**', redirectTo: 'login' },
];