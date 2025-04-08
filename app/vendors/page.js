  "use client";
  import React from "react";
  import TaglineSection from "../components/vendorJoining/taglinseSection";
  import HeroVendor from "../components/vendorJoining/HeroVendor";
  import NavbarMega from "../components/NavbarMega";
  import Footer from "../components/Footer";
  import FeatureCardsSection from "../components/vendorJoining/FeatureCardsSection";
  import SEOTextRichSection from "../components/vendorJoining/SEOTextRichSection";
  import AddVendor from "../components/ui/modal/AddVendor";
  //==================================================================
  const VendorJoinUsPage = () => {
    const [isAddVendorModalOpen, setIsAddVendorModalOpen] = React.useState(false);
    //==================================================================
    return (
      <>
        <NavbarMega />
        <HeroVendor setIsAddVendorModalOpen={setIsAddVendorModalOpen} />
        <TaglineSection setIsAddVendorModalOpen={setIsAddVendorModalOpen} />
        <FeatureCardsSection />
        <SEOTextRichSection />
        {/* -----------------  Add Vendor Form -----------------  */}
        <AddVendor

          title={"Join Us as a Delivery Partner"}
          description={"We are looking for delivery partners to join our team and help us deliver the best service to our customers."}
          isOpen={isAddVendorModalOpen}
          onClose={() => setIsAddVendorModalOpen(false)}
        />
        {/* ------------------------------------------------------- */}
        <Footer />
      </>
    );
  };
  //==================================================================
  export default VendorJoinUsPage;
  //==================================================================