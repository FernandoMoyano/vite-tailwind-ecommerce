import { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = response.json();
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
      {items.map((item) => (
        <Card data={item} key={item.id} />
      ))}
      Home
    </Layout>
  );
};

export default Home;
