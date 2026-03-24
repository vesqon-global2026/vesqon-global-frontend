import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.jsx";
import ThirdPartyInspection from "./component/ThirdPartyInspection.jsx";
import AssetIntegrityManagement from "./component/AssetIntegrityManagement.jsx";
import NDTServices from "./component/NDTServices.jsx";
import TechnicalStaffing from "./component/TechnicalStaffing.jsx";
import Training from "./component/Training.jsx";
import Carriers from "./component/Carriers.jsx";
import Contact from "./component/Contact.jsx";
import OurService from "./component/OurService.jsx";
import About from "./component/About.jsx";
// import Careers from "./Component/Careers.jsx";
// import About from "./Component/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}  />
      <Route path="/OurServices" element={<OurService />} />
      <Route path="/services/third-party-inspection" element={<ThirdPartyInspection />} />
      <Route path="/services/asset-integrity-management" element={<AssetIntegrityManagement />} />
      <Route path="/services/ndt-services" element={<NDTServices />} />
      <Route path="/services/technical-staffing" element={<TechnicalStaffing />} />
      <Route path="/services/training" element={<Training />} />
      <Route path="/careers" element={<Carriers />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;