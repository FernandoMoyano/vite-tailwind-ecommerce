import { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import CheckoutSideMenu from "../../components/CheckoutSideMenu/CheckoutSideMenu";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data)
        setItems(data);
      } catch (error) {
        console.log(`Hubo un error ${error}`);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <NavBar />
      Home
      <section className="grid gap'4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
      <ProductDetail/>
      <CheckoutSideMenu/>
    </Layout>
  );
};

export default Home;
