import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Store from './pages/Store.jsx';
import Admin from './pages/Admin.jsx';
import Checkout from './pages/Checkout.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Logout from './components/Logout.jsx';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<PrivateRoute><Store /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Admin /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;