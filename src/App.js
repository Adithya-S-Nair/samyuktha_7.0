import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "mdb-ui-kit/css/mdb.min.css";

//Pages & Components
import HomePage from "./Pages/MainPage";
import AdminPage from "./Pages/Adminpage";
import Event from "./Pages/Event";
import Details from "./Pages/Details";
import Contact from "./Pages/contact";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/events" element={<Event />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path="/details/:name/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
