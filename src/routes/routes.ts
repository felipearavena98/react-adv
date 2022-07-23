// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
}

// const LazyPage1 = lazy(() => import(/* webpackChunckName: "LazyPage1" */   '../01-lazyload/pages/LazyPage1'));


export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: lazy(() => import(/* webpackChunckName: "LazyLayout" */   '../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
]