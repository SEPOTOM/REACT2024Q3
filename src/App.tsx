import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@store/store';

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
