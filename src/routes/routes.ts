// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
}

const LazyPage1 = lazy(() => import(/* webpackChunckName: "LazyPage1" */   '../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/* webpackChunckName: "LazyPage2" */   '../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunckName: "LazyPage3" */   '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'LazyPage-3'
    }
]