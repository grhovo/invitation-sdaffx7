import { RouteObject } from 'react-router-dom';
import Home from '@containers/Home';
import NotFound from '@containers/NotFound';
import PAGE_ROUTES from '@routes/routingEnum';

export type CustomRouteObject = RouteObject & {
  isPublic?: boolean;
}

export const routingArray: CustomRouteObject[] = [
  { path: PAGE_ROUTES.HOME, element: <Home />, isPublic: true },
  { path: '*', element: <NotFound />, isPublic: true },
  {
    children: [
      { path: PAGE_ROUTES.GUEST, element: <Home /> },
    ],
  },
];
