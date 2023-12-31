import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,

    closeProductDetail,
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white" />
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </button>
      );
    }
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
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{data.title}</span>
        <span className="text-md font-medium">{data.price}</span>
      </p>
    </div>
  );
};

export default Card;
