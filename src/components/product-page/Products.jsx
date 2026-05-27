import AdvertiseCard from "./advertiseCard/AdvertiseCard";
import PriorityCard from "./priority-card/PriorityCard";
import Header from "./header/Header";

import "./Products.css";
import ProductCard from "./products-items/ProductCard";
import ViewAllProducts from "./view-all-products/ViewAllProducts";
import FooterAdvertise from "./footer-advertise/FooterAdvertise";
import Footer from "./footer/Footer";

export default function Products() {
  return (
    <div>
      <Header />
      <AdvertiseCard />
      <PriorityCard />
      <ProductCard />
      <ViewAllProducts />
      <FooterAdvertise />
      <Footer />
    </div>
  );
}
