import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import mainImage from "./images/Screenshot 2023-11-07 at 5.43.59 pm.png";
import thumbnail1 from "./images/Screenshot 2023-11-07 at 5.43.59 pm.png";
import thumbnail2 from "./images/Screenshot 2023-11-07 at 5.43.59 pm.png";
import thumbnail3 from "./images/Screenshot 2023-11-07 at 5.43.59 pm.png";

function App() {
  const [amount, setAmount] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleMinus = () => {
    setAmount(prevAmount => prevAmount > 0 ? prevAmount - 1 : 0);
  };

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
        {/* Image Section */}
        <div>
          <img
            src={mainImage}
            alt="Main Product"
            className="w-full lg:rounded-2xl cursor-pointer"
            onClick={() => setShowLightbox(true)}
          />
          {showLightbox && <Lightbox setShowLightbox={setShowLightbox} />}
          <div className="flex justify-center gap-4 mt-4">
            <img src={thumbnail1} alt="Thumbnail 1" className="w-20 cursor-pointer" />
            <img src={thumbnail2} alt="Thumbnail 2" className="w-20 cursor-pointer" />
            <img src={thumbnail3} alt="Thumbnail 3" className="w-20 cursor-pointer" />
          </div>
        </div>
        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            OIL
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
         <h1>“Drizzle” & “Sizzle”
</h1> 
<h2>Extra Virgin Olive Oil</h2>
          </h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            <h3>
              *****1573 Reviews</h3></p> 


          <p className="text-slate-600 mb-10 leading-relaxed">
          <h5>DESCRIPTION</h5>
          <li>DRIZZLE: 500ML</li>
<li>Extra Virgin finishing oil made from olives that are picked early, when flavor is bold and antioxidants are highest. Made for eating, never heating.
</li>
<li>
SIZZLE: 750ML
Extra Virgin cooking oil made from mature, mid-season olives that yield a more mellow flavor. Use it every day, in every way.
</li>
          </p>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>

            <p className="text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>

          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li onClick={handleMinus} className="cursor-pointer">
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmount(amount + 1)}
                className="cursor-pointer"
              >
                <img src={plus} alt="" />
              </li>
            </ul>

            <div className="lg:flex-1">
              <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
                <AiOutlineShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </article>
        {/* Product Details Section */}
        <div className="px-8 pb-10">
          {/* Product details similar to your original component */}
        </div>
      </section>
    </>
  );
}

export default App;
