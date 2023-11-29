import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

const ProductDetail = () => {
  const { isProductDetailOpen } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`${isProductDetailOpen ?"flex": "hidden"} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          {" "}
          <XMarkIcon className="h-6 w-6 " />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
