import Hero from "../components/Hero";
import Testimonials from "../components/Home/Testimonials";
import OurTeam from "../components/Home/OurTeam";
import OurMission from "../components/Home/OurMission";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Our mission section */}
      <OurMission />

      {/* Testimonials section */}
      <Testimonials />

      {/* Our team section */}
      <OurTeam />
    </div>
  );
};

export default Home;
