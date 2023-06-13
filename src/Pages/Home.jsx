import React from "react";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="py-24 mx-auto max-w-[720px] px-[25px] ">
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
