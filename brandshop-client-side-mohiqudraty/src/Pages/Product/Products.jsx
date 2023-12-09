import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

const Products = () => {
  const { brandName } = useParams();
  // console.log(brandName);
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="my-10">
      <Slider></Slider>
      <h2 className="text-4xl text-center my-8">All Product Of {brandName}</h2>

      <div className="max-w-5xl mx-auto grid gap-5 px-4 sm:grid-cols-2">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
      </div>
      {!products?.length && (
        <div>
          <img
            className="max-w-xs block mx-auto"
            src="https://i.ibb.co/SJHjcpB/out-of-stock.jpg"
            alt=""
          />
          <h1 className="text-center text-3xl font-semibold text-gray-600 my-8">
            Products Out of Stock! Right Now.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Products;
