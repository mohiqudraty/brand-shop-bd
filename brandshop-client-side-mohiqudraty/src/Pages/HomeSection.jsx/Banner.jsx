const Banner = () => {
  return (
    <div
      className="hero min-h-[550px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/7jJ80Vf/bnner-tech.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {" "}
            Explore the World of Technology & Electronics
          </h1>
          <p className="mb-5">
            Discover the latest innovations from leading brands like Apple,
            Samsung, Sony, Google, Intel, and more.
          </p>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
