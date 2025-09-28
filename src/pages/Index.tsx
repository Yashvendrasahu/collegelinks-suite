import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoleSelector from "@/components/RoleSelector";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RoleSelector />
      <OpportunitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
