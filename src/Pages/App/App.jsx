import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../../App.css";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOreders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Home />}></Route>
        <Route to="/my-account" element={<MyAccount />}></Route>
        <Route to="/my-order" element={<MyOrder />}></Route>
        <Route to="/my-orders" element={<MyOrders />}></Route>
        <Route to="/*" element={<NotFound />}></Route>
        <Route to="/sign-in" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
