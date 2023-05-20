import Navigation from './Navigation';
import { BrowserRouter, useRoutes} from 'react-router-dom';
import Diagram from './diagram/Diagram';
import Table from './table/TablePage';




const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Table /> },
    { path: "diagram", element: <Diagram /> },
  ]);
  return routes;
};


function App() { 
  return <>
  <BrowserRouter>
    <Navigation/>
    <AppRouter />
  </BrowserRouter>
  </>
}

export default App;
