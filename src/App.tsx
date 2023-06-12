import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import { ROUTES } from "./utils/routes";
import MainPage from './pages/main/mainPage'
import FormPage from './pages/form/formPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route path={ROUTES.FORM} element={<FormPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
