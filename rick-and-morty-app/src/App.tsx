import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import AuthenticationPage from './pages/Authentication/AuthenticationPage';
import Layout from './layout';
import RickAndMortyPage from './pages/home/RickAndMortyPage';

const theme = {
  mode: "light"
}

const App: React.FC = () => {
  return <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <Layout>
            <Routes>
              <Route path="/signin" element={<AuthenticationPage />} />
              <Route path="/home" element={<RickAndMortyPage />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </div>
  </ThemeProvider>
}

export default App;
