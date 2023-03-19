import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/About';
import Error from './components/error/Error';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';

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
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
