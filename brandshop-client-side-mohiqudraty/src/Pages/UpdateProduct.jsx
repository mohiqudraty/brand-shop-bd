import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const products = useLoaderData();
  const { _id, image, name, brandName, type, price, rating } = products || {};

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const updateProduct = {
      image,
      name,
      brandName,
      type,
      price,
      rating,
    };
    console.log(updateProduct);

    fetch(`https://brand-shop-bd-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Your Product successfully Updated!");
          form.reset();
        }
      });
  };
  return (
    <>
      {
        <form
          onSubmit={handleUpdateProduct}
          className="container mx-auto my-8 px-4"
        >
          <h2 className="text-4xl font-bold text-center">
            Update Your Product
          </h2>
          <div className="max-w-5xl mx-auto  my-6 grid gap-10 sm:grid-cols-2 ">
            {/*  input for Product Img URL */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Img URL
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Type here Your Product Img URL"
                className="input input-bordered input-group w-full "
              />
            </div>
            {/*  input for Name */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Product Name"
                className="input input-bordered input-group w-full "
              />
            </div>
            {/*  input for Brand Name */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand Name
              </label>
              {/* <input
       type="text"
       name="brand"
       placeholder="Brand Name"
       className="input input-bordered input-group w-full "
     /> */}
              <select
                id="pet-select"
                type="text"
                name="brandName"
                defaultValue={brandName}
                className="input input-bordered input-group w-full py-2 "
              >
                <option value="">Please choose a Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Intel">Intel</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Sony">Sony</option>
              </select>
            </div>
            {/*  input for Type */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type
              </label>
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Phone, Computer, Headphone, etc"
                className="input input-bordered input-group w-full "
              />
            </div>
            {/*  input Price */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered input-group w-full "
              />
            </div>

            {/*  input for Rating */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rating
              </label>
              {/* <input
       type="number"
       name="rating"
       placeholder="Rating (1-5) Number"
       className="input input-bordered input-group w-full "
     /> */}
              <select
                id="pet-select"
                name="rating"
                defaultValue={rating}
                className="input input-bordered input-group w-full pt-2 "
                required
              >
                <option value="">Please choose a Rating</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="text-white block mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Product Info
          </button>
        </form>
      }
    </>
  );
};

export default UpdateProduct;
