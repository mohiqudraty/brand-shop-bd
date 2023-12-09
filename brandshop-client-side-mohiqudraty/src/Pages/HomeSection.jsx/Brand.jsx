import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  // console.log(brand);
  const { brandName, img } = brand || {}

  return (
    <Link to={brandName}>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-56 w-full" src={img} alt="" />

        <div className="p-5 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {brandName}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Brand;

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};
