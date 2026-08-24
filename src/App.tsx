import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Properties from "./pages/Properties";
import Advisory from "./pages/Advisory";
import Contact from "./pages/Contact";
import PropertyDetail from "./pages/PropertyDetail";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:slug" element={<PropertyDetail />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
