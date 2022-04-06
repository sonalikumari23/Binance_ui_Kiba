import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./components/pages/Employer/SignIn";
import LoginForm from "./components/pages/Employer/LoginForm";
import Appbar from "./components/common/Appbar";
import Footer from "./components/common/Footer";
import LandingPage from "./components/pages/Employer/LandingPage";
import BuyModal from "./components/pages/BuyModal";
import SellModel from "./components/pages/Employer/SellModel";
import OrderPage from "./components/pages/OrderPage/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Appbar></Appbar>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dialogBuy" element={<BuyModal />} />
        <Route path="/dialogSell" element={<SellModel />} />
        <Route path="/orderpage" element={<OrderPage />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
