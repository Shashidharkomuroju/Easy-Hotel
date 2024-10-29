import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/LoginPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import { useState } from "react";
import AfterLoginNavbar from "./Components/Navbar/AfterLoginNavbar";
import BeforeLoginNavbar from "./Components/Navbar/BeforeLoginNavbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import HotelPage from "./Pages/HotelPage/HotelPage";
import HotelData1 from "./Pages/HotelsData/HotelData1";
import NovotelDetails from "./Pages/HotelSingles/NovotelDetails";
import HotelData2 from "./Pages/HotelsData/HotelData2";
import HotelParkDetails from "./Pages/HotelSingles/HotelParkDetails";
import HotelData3 from "./Pages/HotelsData/HotelData3";
import ShashiDetails from "./Pages/HotelSingles/ShashiDetails";
import BookingConfirmation from "./Pages/SuceesfullPage/BookingConfirmation";
import HotelDetails from "./Pages/HotelsData/HotelDetails";
import HotelSingle from "./Pages/HotelSingles/HotelSingle";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {isLoggedIn ? (
          <AfterLoginNavbar onLogout={handleLogout} />
        ) : (
          <BeforeLoginNavbar />
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route
            path="/landing"
            element={isLoggedIn ? <LandingPage /> : <Navigate to="/Login" />}
          />
          <Route
            path="/HotelDetails"
            element={isLoggedIn ? <HotelDetails /> : <HomePage />}
          />
          <Route
            path="/HotelDetails/:id"
            element={isLoggedIn ? <HotelSingle /> : <HomePage />}
          />
          <Route
            path="/hotel-page"
            element={isLoggedIn ? <HotelPage /> : <HomePage />}
          />
          <Route
            path="/Novotel"
            element={isLoggedIn ? <HotelData1 /> : <HomePage />}
          />
          <Route
            path="/Novotel/:id"
            element={isLoggedIn ? <NovotelDetails /> : <HomePage />}
          />
          <Route
            path="/HotelPark"
            element={isLoggedIn ? <HotelData2 /> : <HomePage />}
          />
          <Route
            path="/HotelPark/:id"
            element={isLoggedIn ? <HotelParkDetails /> : <HomePage />}
          />
          <Route
            path="/Shashi"
            element={isLoggedIn ? <HotelData3 /> : <HomePage />}
          />
          <Route
            path="/Shashi/:id"
            element={isLoggedIn ? <ShashiDetails /> : <HomePage />}
          />
          <Route
            path="/Bookingconfirmation"
            element={<BookingConfirmation />}
          />
          <Route path="/logout" element={<HomePage />} />
        </Routes>
        {/* {isLoggedIn && <button onClick={handleLogout}>Logout</button>} */}
      </Router>
    </div>
  );
}

export default App;
