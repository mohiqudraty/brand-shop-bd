/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartCard = ({ cart, myCart, setMycart }) => {
  const { _id, image, name, brandName, type, price, shortDescription, rating } =
    cart || {};

  // console.log(typeof _id);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-bd-server.vercel.app/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }

            const remainingCart = myCart?.filter((cart) => cart._id !== _id);
            setMycart(remainingCart);
          });
      }
    });
  };

  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="w-60 h-60 object-cover rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="py-1">
            Price: <span className="font-bold"> ${price}</span>
          </p>
          <p className="py-1 mb-5">
            Brand: <span className="font-bold"> {brandName}</span>
          </p>

          <Link to={"/payment"}>
            {" "}
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              BUY NOW
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="text-white bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-600 dark:bg-yellow-600:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

CartCard.propTypes = {
  cart: PropTypes.object,
  myCart: PropTypes.array,
  setMycart: PropTypes.func,
};
