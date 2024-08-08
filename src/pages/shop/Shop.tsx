import { StyleDivider } from "@/common/StyleDivider";
import ProductList from "@/components/Store/ProductList";
import { Product, products } from "@/constants/product";
import { dataStores, Store } from "@/constants/stores";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { id } = useParams();
  const [store, setStore] = useState<Store>();
  const [productInStore, setProductInStore] = useState<Product[]>([]);
  useMemo(() => {
    const storeData = dataStores.find((store) => store.id === Number(id));
    const productStore = products.filter(
      (product) => product.storeId === Number(id)
    );
    setStore(storeData);
    setProductInStore(productStore);
  }, [id]);
  return (
    <div className="bg-secondary-200 w-full m-auto">
      <div className="w-[75%] m-auto ">
        <div className="pt-[4rem] pb-[4rem] flex flex-col md:flex-row justify-center">
          <div className="flex flex-col-reverse items-center w-100% md:flex-row md:gap-x-8">
            <div className="space-y-8 md:w-3/5">
              <p className="text-2xl text-tile font-bold">{store?.company}</p>
              <div>{store?.introduce}</div>
              <div>
                <div>Địa chỉ: {store?.address}</div>
                <div>Hotline: {store?.phone}</div>
                <div>
                  Website:{" "}
                  <u className="text-link cursor-pointer">{store?.website}</u>
                </div>
                <div>
                  Email:{" "}
                  <u className="text-link cursor-pointer">{store?.email}</u>
                </div>
                <div>
                  Giờ mở cửa:{" "}
                  {store?.openHours &&
                    store?.openHours[0]?.startTime &&
                    `${store.openHours[0]?.startTime} - ${store.openHours[0]?.endTime}`}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-100% h-[448px] overflow-hidden md:w-2/5 md:flex-row mt-[1rem] rounded-xl">
              <img
                src={store?.imgUrl}
                alt="No picture"
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
        <StyleDivider />
        <div className="py-8 text-[32px] flex flex-col justify-center items-center">
          <div className="text-normal text-center uppercase">
            Sản phẩm của {store?.title}
          </div>
          <div className="w-16 h-1 bg-primary mt-2 mb-8"></div>
          <ProductList products={productInStore} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
