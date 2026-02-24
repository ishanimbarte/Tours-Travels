import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularPackages from "./components/PopularPackages";
import WhyChooseUs from "./components/WhyChooseUs";
import TopDestinations from "./components/TopDestinations";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";





import PackageDetails from "./pages/PackageDetails";
import TopDestinationsDetails from "./pages/TopDestinationsDetails";
import OurPackagesDetails from "./pages/OurPackagesDetails";
import DomesticTours from "./pages/DomesticTours";
import DomesticTourDetails from "./pages/DomesticTourDetails";
import InternationalTours from "./pages/InternationalTours";
import InternationalTourDetails from "./pages/InternationalTourDetails";
import HoneymoonPackages from "./pages/HoneymoonPackages";
import HoneymoonTourDetails from "./pages/HoneymoonTourDetails";
import FamilyTours from "./pages/FamilyTours";
import FamilyTourDetails from "./pages/FamilyTourDetails";
import AdventureTours from "./pages/AdventureTours";
import AdventureTourDetails from "./pages/AdventureTourDetails";
import ReligiousTours from "./pages/ReligiousTours";
import ReligiousTourDetails from "./pages/ReligiousTourDetails";
import AboutPage from "./pages/About";
import BookingPage from "./pages/FlightBooking";
import HotelBooking from "./pages/HotelBooking";
import VisaServices from "./pages/VisaServices";
import VisaApplication from "./pages/VisaApplication";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ScrollToTop from "./pages/ScrollToTop";
import VirtualTour from "./pages/VirtualTour";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PopularPackages />
              <WhyChooseUs />
              <TopDestinations />
              <Packages />
              <Testimonials />
              <Services />
              <CTA />
              
            </>
          }
        />

        <Route path="/packages" element={<Packages />} />
        {/* <Route path="/login" element={<h1>Login</h1>} /> */}
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/destination/:id" element={<TopDestinationsDetails />} />
        <Route path="/our-packages/:id" element={<OurPackagesDetails />} />
        <Route path="/domestic-tours" element={<DomesticTours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/domestic/:id" element={<DomesticTourDetails />} />
        <Route path="/international-tours" element={<InternationalTours />} />
        <Route path="/international-tours/:id" element={<InternationalTourDetails />} />
        <Route path="/honeymoon" element={<HoneymoonPackages />} />
        <Route path="/honeymoon/:id" element={<HoneymoonTourDetails />} />
        <Route path="/family-tours" element={<FamilyTours />} />
        <Route path="/family-tours/:id" element={<FamilyTourDetails />} />
        <Route path="/adventure-tours" element={<AdventureTours />} />
        <Route path="/adventure-tours/:id" element={<AdventureTourDetails />} />
        <Route path="/religious-tours" element={<ReligiousTours />} />
        <Route path="/religious-tours/:id" element={<ReligiousTourDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/flight-booking" element={<BookingPage />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
        <Route path="/visa-services" element={<VisaServices />} />
        <Route path="/visa-application" element={<VisaApplication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
