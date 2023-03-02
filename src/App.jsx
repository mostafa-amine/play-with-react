import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/Layouts/Navbar';
import Web from './routes/web';

function App() {

  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Web />
      </BrowserRouter>
    </div>
  )
}

export default App
