import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const productDetails = useLoaderData();
  // console.log(productDetails);
  const { image, name, brandName, type, price, shortDescription, rating } =
    productDetails || {};

  const handleAddToCart = () => {
    console.log(productDetails);
    // const { image, name, brandName, type, price, shortDescription, rating } =
    //   productDetails;

    const product = {
      image,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      email: user.email,
    };

    console.log(product);

    fetch("https://brand-shop-bd-server.vercel.app/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Add To Cart Successful");
          navigate("/mycart");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something Problem!");
        navigate("/mycart");
      });
  };

  return (
    <div>
      <div className="card max-w-5xl my-10  mx-auto bg-base-100 shadow-xl flex flex-col md:flex-row">
        <figure className="px-10 pt-10 md:w-2/3">
          <img
            src={image}
            alt={name}
            className="rounded-xl max-h-96 w-full object-cover"
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title py-1">{name}</h2>

          <p>
            <span className=" font-bold">Brand: </span> {brandName}
          </p>
          <p>
            <span className=" font-bold">Type: </span> {type}
          </p>

          <div className="flex items-center">
            <span className=" font-bold mr-1">Rating:</span>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>

          <p>
            <span className=" font-bold">Price:</span> ${price}
          </p>

          <p>
            <span className="  font-bold">Description:</span> {shortDescription}
          </p>

          <div className="card-actions ">
            <button
              onClick={handleAddToCart}
              className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
