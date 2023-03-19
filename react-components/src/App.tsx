import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './routes/about/About';
import Error from './routes/error/Error';
import Layout from './layout/Layout';
import Main from './routes/main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
