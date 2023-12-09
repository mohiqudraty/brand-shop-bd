import toast, { Toaster } from "react-hot-toast";

const Subscribe = () => {
  const handleSubscribe = () => {
    toast.success("Successfully Subscribed!");
  };

  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      <div className="w-full relative flex items-center justify-center">
        <img
          src="https://i.ibb.co/SsNRp1c/subscribe.jpg"
          alt="dining"
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1 className="text-2xl sm:text-4xl font-semibold leading-9 text-white text-center">
            Subscribe to Get Our New Branded Product News!
          </h1>
          <p className="text-base leading-normal text-center text-white mt-6">
            Stay updated with the latest releases and updates on our branded
            products. <br />
            Subscribe free to our newsletter to receive weekly updates.
          </p>
          <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <input
              className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
              required
              placeholder="Email Address"
            />
            <button
              onClick={handleSubscribe}
              className="text-white font-semibold focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-4 px-6 hover:bg-opacity-75"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Subscribe;
