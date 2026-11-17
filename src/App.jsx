/*import { Route, Routes } from 'react-router';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Product from './Pages/Product';  

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
*/

import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Product from './Pages/Product';
import NotFound from './Pages/NotFound';
import ProductDetail from './Pages/ProductDetail';
import Contacts from './Pages/Contacts';
import Projects from './Pages/Projects';
import ProjectsOverview from './Pages/ProjectsOverview';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/about', element: <About /> },
  { path: '/product', element: <Product /> },
  { path: '*', element: <NotFound /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/Contacts', element: <Contacts /> },
  { path: '/Projects', element: <Projects /> },
  { path: '/Projects/:id', element: <ProjectsOverview /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
