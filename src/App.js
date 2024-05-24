import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/layouts/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard/>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;