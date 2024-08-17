import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@store/store';

import { ControlledForm } from '@/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>MainPage</div>,
  },
  {
    path: '/controlled',
    element: <ControlledForm />,
  },
  {
    path: '/uncontrolled',
    element: <div>UncontrolledForm</div>,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
