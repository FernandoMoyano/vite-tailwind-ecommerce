import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
  
    closeProductDetail
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
 
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts(...cartProducts, productData);
    closeProductDetail()
    openCheckoutSideMenu();
  };

  return (
    <div
      onClick={() => showProduct(data)}
      className="bg-white cursor-pointer w-56 h-60"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt="headpones"
        ></img>
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          <PlusIcon
            onClick={(event) => addProductsToCart(event, data)}
            className="h-6 w-6"
          />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{data.title}</span>
        <span className="text-md font-medium">{data.price}</span>
      </p>
    </div>
  );
};

export default Card;
