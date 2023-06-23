import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { HTTPStatusCode } from '../components/HTTPStatusCode';
import { MainLayout } from '../components/MainLayout';
import { Home } from '../pages/Home';

const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '*',
        element: <HTTPStatusCode />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
