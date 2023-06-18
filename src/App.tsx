import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import MainPage from './pages/main/mainPage'
import FormPage from './pages/form/formPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='/create' element={<FormPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
