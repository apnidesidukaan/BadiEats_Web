import OurLocation from "../../components/OurLocation";
import Footer from "../../components/Footer";
import NavbarMega from "../../components/NavbarMega";
import ServiceDetail from "../../components/ServiceDetails";
import PackagesPage from "../../components/PackagesPage";
import CategoryProducts from "../../components/categoryProducts/CategoryProducts";



export default function ServiceDetailPage({ params }) {

  return (
    <>
      <NavbarMega />

      <CategoryProducts />
      <Footer />
    </>
  );
}
