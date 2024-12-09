
import Blogs from "./components/Blogs";
import Blogss from "./components/Blogss";
import Footer from "./components/Footer";
import Hero from "./components/hero";

import Navbar from "./components/Navbar";
import Product from "./components/Product";


export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <Hero/>
      <Hero/>
      <Blogs/>
      <Blogss/>
      <Footer/>
    </div>
  );
}
