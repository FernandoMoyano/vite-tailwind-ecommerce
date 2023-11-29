import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../../App.css";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOreders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";
import NavBar from "../../components/NavBar/NavBar";
import { ShoppingCartProvider } from "../../context/Context";

function App() {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-account" element={<MyAccount />}></Route>
        <Route path="/my-order" element={<MyOrder />}></Route>
        <Route path="/my-orders" element={<MyOrders />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
      <NavBar/>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
