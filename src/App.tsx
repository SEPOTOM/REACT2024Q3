import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>MainPage</div>,
  },
  {
    path: '/controlled',
    element: <div>ControlledForm</div>,
  },
  {
    path: '/uncontrolled',
    element: <div>UncontrolledForm</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
