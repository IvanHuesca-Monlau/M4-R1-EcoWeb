const SustainableDevelopment = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modelo de desarrollo sostenible
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            El equilibrio perfecto entre economía, sociedad y medio ambiente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-600 text-white rounded-xl p-8 text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Pilar ambiental</h3>
            <p className="leading-relaxed">
              Protección de recursos naturales, reducción de emisiones y
              conservación de la biodiversidad. Tecnología que respeta el
              planeta.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-8 text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-2xl font-bold mb-4">Pilar social</h3>
            <p className="leading-relaxed">
              Equidad, inclusión, bienestar laboral y responsabilidad social.
              Tecnología que beneficia a todas las personas.
            </p>
          </div>

          <div className="bg-purple-600 text-white rounded-xl p-8 text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4">Pilar económico</h3>
            <p className="leading-relaxed">
              Viabilidad financiera, innovación y crecimiento responsable.
              Tecnología que genera valor sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableDevelopment;