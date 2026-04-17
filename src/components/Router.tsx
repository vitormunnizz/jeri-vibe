import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import PasseiosPage from '@/components/pages/PasseiosPage';
import HospedagemPage from '@/components/pages/HospedagemPage';
import TransferPage from '@/components/pages/TransferPage';
import AulasPage from '@/components/pages/AulasPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "passeios",
        element: <PasseiosPage />,
        routeMetadata: {
          pageIdentifier: 'passeios',
        },
      },
      {
        path: "hospedagem",
        element: <HospedagemPage />,
        routeMetadata: {
          pageIdentifier: 'hospedagem',
        },
      },
      {
        path: "transfer",
        element: <TransferPage />,
        routeMetadata: {
          pageIdentifier: 'transfer',
        },
      },
      {
        path: "aulas",
        element: <AulasPage />,
        routeMetadata: {
          pageIdentifier: 'aulas',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
