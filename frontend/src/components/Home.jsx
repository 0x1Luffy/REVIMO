import { useEffect, useState } from "react";
import Background from "./Background";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import ShimmerCard from "./ShimmerCard";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://revimo-backend.vercel.app/api/v1/reviews/get-products"
        );
        setProducts(response.data); // Set the fetched data
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts(); // Call the function to fetch products when component mounts
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {products.length > 0 ? (
              products.map((product) => (
                <Card key={product._id} product={product} />
              ))
            ) : (
              // Use ShimmerCard while loading
              <>
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
              </>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
