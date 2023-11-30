import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

const ProductDetail = () => {
  const { isProductDetailOpen, productToShow, closeProductDetail } =
    useContext(ShoppingCartContext);

  console.log(productToShow);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 top-20 border bg-white border-black rounded-lg w-[360px] h-full z-50 
      	`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          {" "}
          <XMarkIcon
            onClick={() => closeProductDetail()}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <figure>
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl">${productToShow.price}</span>
        <span className="font-medium text-md">${productToShow.title}</span>
        <span className="font-medium text-sm">
          ${productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
