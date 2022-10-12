import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import Layout from './layout';
import RickAndMortyPage from './pages/home/RickAndMortyPage';

const App: React.FC = () => {
  return (
    <div className = "App" >
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/signin" element={<AuthenticationPage />} />
              <Route path="/home" element={<RickAndMortyPage />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </div >
  )
}

export default App;
