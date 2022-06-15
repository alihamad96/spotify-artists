import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "../Components/Header/Header";
import Albums from "../Pages/Albums/Albums";
import Artists from "../Pages/Artists/Artists";
import Login from "../Pages/Login/Login";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/albums/:id" element={<Albums />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
