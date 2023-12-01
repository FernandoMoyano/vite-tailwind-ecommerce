import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import OrderCard from "../OrderCard/OrderCard";

const CheckoutSideMenu = () => {
  const {
    productToShow,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
  } = useContext(ShoppingCartContext);

  console.log(productToShow);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-0 top-20 border bg-white border-black rounded-lg w-[360px] h-full z-50 
      	`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          {" "}
          <XMarkIcon
            onClick={() => closeCheckoutSideMenu()}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      {cartProducts.map((product) => {
        <OrderCard
          title={product}
          imageUrl={product.image}
          price={product.price}
        />;
      })}
    </aside>
  );
};

export default CheckoutSideMenu;
