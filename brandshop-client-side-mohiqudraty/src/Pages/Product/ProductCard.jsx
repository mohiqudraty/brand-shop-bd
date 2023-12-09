/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  const { _id, image, name, brandName, type, price, description, rating } =
    product || {}

  return (
    <div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="p-8 w-full h-96 object-cover border-2 rounded-2xl"
          src={image}
          alt={`Photo of${name}`}
        />

        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div className="flex justify-between items-center">
            <div className="flex items-center mt-2.5 mb-3">
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
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              Price: <span>${price}</span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium">
              Brand:{" "}
              <span className="text-gray-600"> {brandName.toUpperCase()}</span>
            </p>
            <p className="font-medium">Category: {type.toUpperCase()}</p>
          </div>
          <p className="hidden">{description}</p>
          <div className="flex items-center justify-between mt-3">
            <Link to={`/update/${_id}`}>
              <button
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800 "
              >
                Update
              </button>
            </Link>
            <Link to={`/details/${_id}`}>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800 ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
