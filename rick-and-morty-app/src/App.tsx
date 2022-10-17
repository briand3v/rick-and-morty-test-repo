import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import Layout from './layout';
import ShowCharacters from './pages/home/ShowCharactersPage';
import ProtectedRoute from './router/ProtectedRoute';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <div className = "App" >
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/signin" element={<AuthenticationPage />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <ShowCharacters />
                </ProtectedRoute>
              } />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </div >
  )
}

export default App;
