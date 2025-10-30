import headerImage from "../assets/images/header-2.jpg";
import Ods from "../components/Sustainability/Ods";
import SustainableDevelopment from "../components/Sustainability/SustainableDevelopment";
import SustainableApproach from "../components/Sustainability/SustainableApproach";

const Sustainability = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Sostenibilidad</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Nuestro compromiso con un futuro más verde y sostenible
          </p>
        </div>
      </section>

      {/* Enfoque Sostenible */}
      <SustainableApproach />

      {/* ODS */}
      <Ods />

      {/* Modelo de desarrollo sostenible */}
      <SustainableDevelopment />
    </div>
  );
};

export default Sustainability;
