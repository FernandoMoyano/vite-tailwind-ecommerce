import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import { PlusIcon } from "@heroicons/react/24/solid";

/* eslint-disable react/prop-types */
const Card = ({ price, title, image, category }) => {
  const { count, setCount } = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="headpones"
        ></img>
        <button
          onClick={() => setCount(count + 1)}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
          <PlusIcon className="h-6 w-6"/>
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{title}</span>
        <span className="text-md font-medium">{price}</span>
      </p>
    </div>
  );
};

export default Card;
