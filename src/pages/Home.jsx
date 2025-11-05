import Hero from "../components/Hero";
import Testimonials from "../components/home/Testimonials";
import OurTeam from "../components/home/OurTeam";
import OurMission from "../components/home/OurMission";

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
