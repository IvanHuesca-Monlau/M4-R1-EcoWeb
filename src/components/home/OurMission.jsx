const OurMission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestra misión
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            En <span className="font-bold text-green-700">Huesgreen Dev</span>,
            nuestra misión es reducir la huella de carbono de la industria
            tecnológica y ofrecer soluciones que respeten los principios de{" "}
            <span className="font-semibold">
              ASG (Ambiental, Social y Gobernanza)
            </span>
            .
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Creemos que la tecnología debe ser un motor de cambio positivo, no
            solo en términos de innovación, sino también en su impacto en el
            planeta y la sociedad. Cada proyecto que desarrollamos está diseñado
            para maximizar la eficiencia energética y minimizar el impacto
            ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Ambiental</h3>
            <p className="text-gray-700">
              Reducción de emisiones de CO2, uso de energías renovables y
              optimización de recursos.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">Social</h3>
            <p className="text-gray-700">
              Condiciones laborales justas, diversidad e inclusión, y compromiso
              con la comunidad.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              Gobernanza
            </h3>
            <p className="text-gray-700">
              Transparencia, ética empresarial y gestión responsable en todas
              nuestras operaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;