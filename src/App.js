import Dashboard from './pages/Dashboard.jsx'
import Clientes from './pages/Clientes.jsx'
import Fornecedores from './pages/Fornecedores.jsx'
import ProjetosIniciados from './pages/ProjetosIniciados.jsx'
import ProjetosFinalizados from './pages/ProjetosFinalizados.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@progress/kendo-theme-default/dist/all.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/clientes",
    element: <Clientes />
  }
  ,
  {
    path: "/fornecedores",
    element: <Fornecedores />
  }
  ,
  {
    path: "/projetosfinalizados",
    element: <ProjetosFinalizados />
  }
  ,
  {
    path: "/projetosiniciados",
    element: <ProjetosIniciados />
  }
  
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
