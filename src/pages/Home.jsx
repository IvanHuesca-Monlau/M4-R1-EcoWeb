import Hero from "../components/Hero";
import Testimonials from "../components/Home/Testimonials";
import OurTeam from "../components/Home/OurTeam";
import OurMission from "../components/Home/OurMission";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Sección Misión */}
      <OurMission />

      {/* Testimonios */}
      <Testimonials />


      {/* Nuestro equipo */}
      <OurTeam />

    </div>
  );
};

export default Home;
