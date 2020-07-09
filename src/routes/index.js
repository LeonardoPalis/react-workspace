import React from 'react';
import Home from '../pages/Home';

export const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/user',
        component: () => <span>User</span>
    }
];
