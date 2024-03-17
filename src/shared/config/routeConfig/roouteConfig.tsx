import { ConstructionPage } from 'pages/ConstructionPage';
import { Estimates } from 'pages/Estimates';
import { NotFoundPages } from 'pages/NotFoundPages';
import { ProjectPages } from 'pages/ProjectPages';
import { PlaningPage } from 'pages/TaskPages';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  CONSTRUCTION = 'construction',
  DEV_ESTIMATES = 'dev_estimates',
  PLANING = 'planing',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CONSTRUCTION]: '/construction',
    [AppRoutes.PLANING]: '/planing',
    [AppRoutes.DEV_ESTIMATES]: '/dev_estimates',
    [AppRoutes.NOT_FOUND]: '*',
};
export const routeConfig: Record<AppRoutes, RouteProps > = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <ProjectPages/>,
    },
    [AppRoutes.CONSTRUCTION]: {
        path: RoutePath.construction,
        element: <ConstructionPage/>,
    },
    [AppRoutes.DEV_ESTIMATES]: {
        path: RoutePath.dev_estimates,
        element: <Estimates/>,
    },
    [AppRoutes.PLANING]: {
        path: RoutePath.planing,
        element:  <PlaningPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPages />,
    },
};
