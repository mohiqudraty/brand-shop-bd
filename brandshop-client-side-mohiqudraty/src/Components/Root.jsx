import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="font-openSans">
      {/* navbar */}
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      {/* outlet */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* footer */}

      <Footer></Footer>
    </div>
  );
};

export default Root;
