import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './routes/about/About';
import Error from './routes/error/Error';
import Layout from './layout/Layout';
import Main from './routes/main/Main';
import { productType } from './types';
import { generateProducts } from './generateProduct';
import Form from './routes/form/Form';

const allProducts: productType[] = generateProducts();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main products={allProducts} />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/form',
        element: <Form />,
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
