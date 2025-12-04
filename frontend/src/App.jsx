import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./Components/RegisterPage";
import NotAuthorized from "./Components/NotAuthorized";
import PageNotFound from "./Components/PageNotFound";

import "./App.css";
import ContactsApp from "./Components/ContactsApp";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/contacts" element={<ContactsApp />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
