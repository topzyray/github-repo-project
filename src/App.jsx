import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: 'recipes',
        //   element: <Recipes />,
        // },
        // {
        //   path: 'about',
        //   element: <About />,
        // },
        // {
        //   path: 'pages',
        //   element: <Pages />,
        // },
        // {
        //   path: 'login',
        //   element: <Login />,
        // },
        // {
        //   path: 'signup',
        //   element: <Signup />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
