import { createBrowserRouter } from 'react-router-dom';

import { Routes } from '../../shared/config/router';
import { Layout, MainPage, MapPage, NotFoundPage } from '../../pages';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: Routes.MAP, element: <MapPage /> },
      { path: Routes.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);
