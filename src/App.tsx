import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@store/store';

import { ControlledForm, MainPage } from '@/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
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
