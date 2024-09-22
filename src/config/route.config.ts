import { lazy } from "react";
import { Routes } from "../types/routes";

const appRoutes: Routes =[
    {
        key: 'home',
        path: `/home`,
        component: lazy(() => import('@/views/home')),
        authority: [],
        index: true
    },
    {
        key: 'registerPassKey',
        path: `/register-passkey`,
        component: lazy(() => import('@/views/registration')),
        authority: []
    },
]

export {appRoutes}