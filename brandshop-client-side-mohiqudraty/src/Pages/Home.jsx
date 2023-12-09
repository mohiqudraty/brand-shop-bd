import { useLoaderData } from "react-router-dom";
import Banner from "./HomeSection.jsx/Banner";
import Brand from "./HomeSection.jsx/Brand";
import Faq from "./HomeSection.jsx/Faq";
import { useEffect, useState } from "react";
import Subscribe from "./HomeSection.jsx/Subscribe";

const Home = () => {
  const brands = useLoaderData();
  const [faqData, setFaqData] = useState([]);

  // load data for faq
  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFaqData(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      {/* Banner section  */}
      <Banner></Banner>

      {/* brand section  */}
      <div className="my-20 px-3 ">
        <h2 className="text-2xl sm:text-4xl font-black text-center">
          Chose Your Favorite Brand
        </h2>
        <div className="max-w-5xl mx-auto text-justify px-4 sm:text-center my-2 text-gray-500">
          <p>
            Explore the best in tech and innovation with our Choose Your
            Favorite Brand section. Dive into the world of renowned brands such
            as Apple, Google, Microsoft, and more. Discover their latest
            products, breakthroughs, and designs—all in one place. Pick your
            preferred brand and immerse yourself in a realm of cutting-edge
            technology and exceptional experiences.
          </p>
        </div>
        <div className="  grid gap-3 sm:grid-cols-2 lg:grid-cols-3 my-12 ">
          {brands &&
            brands.map((brand) => (
              <Brand key={brand._id} brand={brand}></Brand>
            ))}
        </div>
      </div>

      {/* Faq section  */}
      <div className="mt-20">
        <h2 className="text-4xl text-center font-black  mb-4 underline">
          Frequently asked questions
        </h2>
        {faqData && faqData.map((faq) => <Faq key={faq.id} faq={faq}></Faq>)}
      </div>

      {/* Subscribe section  */}
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
