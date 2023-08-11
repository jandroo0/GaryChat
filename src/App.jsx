import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import './style.scss';

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({ children }) => { // protected route on home page, only allowed if logged in, otherwise send to login page.
    if (!currentUser) {
      return <Navigate to="/login" /> // nav to login page
    };

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>

    </BrowserRouter>

  );

};

export default App;
